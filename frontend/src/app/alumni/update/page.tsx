'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function UpdateAlumniProfilePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploadPreview, setUploadPreview] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Show local preview immediately
    setUploadPreview(URL.createObjectURL(file));
    setUploading(true);
    setUploadError('');

    const uploadData = new FormData();
    uploadData.append('file', file);

    try {
      const res = await fetch('/api/alumni/upload', {
        method: 'POST',
        body: uploadData,
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || 'Failed to upload image.');
      }

      setFormData(prev => ({ ...prev, profilePhoto: result.url }));
    } catch (err: any) {
      setUploadError(err.message || 'Image upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    currentCity: '',
    qualification: '',
    college: '',
    company: '',
    jobRole: '',
    profilePhoto: '',
  });

  const [fixedData, setFixedData] = useState({
    fullName: '',
    passoutYear: '',
    dob: '',
    status: ''
  });

  useEffect(() => {
    // Fetch existing profile data
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/alumni/profile');
        if (res.status === 401) {
          router.push('/alumni/verify');
          return;
        }
        
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to load profile');

        const profile = data.profile;
        setFixedData({
          fullName: profile.fullName,
          passoutYear: profile.passoutYear,
          dob: profile.dob,
          status: profile.status
        });

        setFormData({
          email: profile.email || '',
          mobile: profile.mobile || '',
          currentCity: profile.currentCity || '',
          qualification: profile.qualification || '',
          college: profile.college || '',
          company: profile.company || '',
          jobRole: profile.jobRole || '',
          profilePhoto: profile.profilePhoto || '',
        });
        setUploadPreview(profile.profilePhoto || '');

      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/alumni/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess(data.message);
      
      // Redirect after success
      setTimeout(() => {
        router.push('/alumni');
      }, 4000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Update Profile</h1>
          <p className="mt-2 text-gray-600">Welcome back, {fixedData.fullName}. Update your details below.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
        >
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
              {success}
            </div>
          )}

          {/* Locked Identity Details */}
          <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-wrap gap-4 items-center justify-between">
             <div className="flex flex-col gap-1">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Identity (Locked)</span>
                <span className="text-gray-900 font-medium">{fixedData.fullName} • Class of {fixedData.passoutYear}</span>
             </div>
             <div>
                <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                  fixedData.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {fixedData.status}
                </span>
             </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Editable Contact Details */}
            <div>
              <h2 className="text-lg font-semibold border-b pb-2 mb-4">Contact Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current City</label>
                  <input type="text" name="currentCity" value={formData.currentCity} onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
              </div>
            </div>

            {/* Editable Professional / Educational Details */}
            <div>
              <h2 className="text-lg font-semibold border-b pb-2 mb-4">Professional & Educational Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification</label>
                  <input type="text" name="qualification" value={formData.qualification} onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">College / University</label>
                  <input type="text" name="college" value={formData.college} onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Current Company / Organization</label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Role / Profession</label>
                  <input type="text" name="jobRole" value={formData.jobRole} onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none" />
                </div>
              </div>
            </div>

            {/* Profile Photo */}
            <div>
              <h2 className="text-lg font-semibold border-b pb-2 mb-4">Profile Photo</h2>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Avatar Preview */}
                <div className="relative w-24 h-24 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center border-2 border-gray-200 shadow-md">
                  {uploadPreview ? (
                    <img src={uploadPreview} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
                      <span className="text-2xl font-bold">
                        {fixedData.fullName ? fixedData.fullName.charAt(0).toUpperCase() : '?'}
                      </span>
                    </div>
                  )}
                  {uploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    </div>
                  )}
                </div>

                <div className="flex-1 w-full">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Update Photo</label>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange}
                    className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer" 
                  />
                  {uploadError && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{uploadError}</p>
                  )}
                  {!uploadError && !uploading && formData.profilePhoto && uploadPreview !== (fixedData as any).profilePhoto && (
                    <p className="text-xs text-green-600 mt-1 font-medium">✓ Image updated successfully!</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">Upload a professional headshot. Square crop works best.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Link href="/alumni" className="text-gray-500 hover:text-gray-800 font-medium text-sm">
                Cancel
              </Link>
              <button 
                type="submit" 
                disabled={submitting || uploading || !!success}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {uploading ? 'Uploading Photo...' : submitting ? 'Submitting...' : 'Submit Update'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
