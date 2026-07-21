'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  User, Phone, GraduationCap, Briefcase,
  Globe, BookOpen, Camera,
  Star, ArrowRight, CheckCircle, ChevronDown, Search, X
} from 'lucide-react';

const STANDARDS = ['LKG','UKG','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
const STANDARDS_LAST = ['LKG','UKG','Std I','Std II','Std III','Std IV','Std V','Std VI','Std VII','Std VIII','Std IX','Std X','Std XI','Std XII'];
const EDUCATION_LEVELS = ['Schooling','Higher Secondary','Vocational Education','Graduation','Post Graduation',"Didn't Pursue Further",'Other'];
const MARITAL_STATUS = ['Single','Married'];
const GENDERS = ['Male','Female'];
const SECTORS = ['Private','Government','Armed Forces','Other'];
const CONTACT_SHARE = ['Yes','No'];
const JOB_ROLES = [
  'Accountant','Actor','Actress','Airforce Officer','Architect','Army Officer','Artist',
  'Attorney','Banker','Bookkeeper','Builder','Businessman','Businesswoman','Carpenter',
  'Cashier','Chef','Coach','Consultant','Dentist','Designer','Developer','Dietician',
  'Doctor','Economist','Editor','Electrician','Engineer','Farmer','Film Direction',
  'Filmmaker','Fisherman','Flight Attendant','Graphic Designer','IAS','IFS','IPS',
  'Information Technology','Jeweler','Judge','Lawyer','Lecturer','Marketing','Mechanic',
  'Musician','Navy Officer','Nurse','Nutritionist','Optician','Painter','Pharmacist',
  'Photographer','Physician',"Physician's Assistant",'Pilot','Plumber','Police Officer',
  'Politician','Professor','Programmer','Psychologist','Researcher','Receptionist',
  'Salesman','Saleswoman','Scientist','Secretary','Singer','Surgeon','Teacher',
  'Therapist','Translator','Undertaker','Veterinarian','Videographer','Waiter',
  'Waitress','Web Designer','Writer','Other'
];

function SectionHeader({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) {
  return (
    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c9a227]/20 to-[#c9a227]/10 flex items-center justify-center text-[#c9a227] flex-shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <h2 className="text-base font-bold text-[#0d0d3b]">{title}</h2>
        {subtitle && <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

function FormInput({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass = "w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition-all";

function StyledSelect({ name, value, onChange, children, required }: {
  name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode; required?: boolean;
}) {
  return (
    <div className="relative">
      <select name={name} value={value} onChange={onChange} required={required}
        className={`${inputClass} appearance-none pr-10 cursor-pointer`}>
        {children}
      </select>
      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
}

function RadioGroup({ name, options, value, onChange }: {
  name: string; options: string[]; value: string; onChange: (val: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((opt) => (
        <label key={opt} className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium cursor-pointer transition-all duration-200 ${
          value === opt
            ? 'bg-[#0d0d3b] border-[#0d0d3b] text-white shadow-md'
            : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-[#c9a227] hover:bg-[#c9a227]/5'
        }`}>
          <input type="radio" name={name} value={opt} checked={value === opt} onChange={() => onChange(opt)} className="sr-only" />
          <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${value === opt ? 'border-white' : 'border-gray-400'}`}>
            {value === opt && <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />}
          </span>
          {opt}
        </label>
      ))}
    </div>
  );
}

function CheckboxGrid({ options, selected, onChange }: {
  options: string[]; selected: string[]; onChange: (val: string[]) => void;
}) {
  const toggle = (opt: string) => {
    onChange(selected.includes(opt) ? selected.filter(s => s !== opt) : [...selected, opt]);
  };

function SearchableJobSelect({ value, onChange }: { value: string; onChange: (val: string) => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef<HTMLDivElement>(null);

  const filtered = JOB_ROLES.filter(j => j.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (job: string) => {
    onChange(job);
    setOpen(false);
    setQuery('');
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
    setQuery('');
  };

  return (
    <div ref={ref} className="relative">
      {/* Trigger button */}
      <div
        onClick={() => setOpen(prev => !prev)}
        className={`flex items-center justify-between gap-2 w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm cursor-pointer transition-all ${
          open ? 'border-[#c9a227] ring-2 ring-[#c9a227]/40' : 'border-gray-200 hover:border-[#c9a227]/50'
        }`}
      >
        <span className={value ? 'text-gray-800 font-medium' : 'text-gray-400'}>
          {value || 'Select your profession...'}
        </span>
        <div className="flex items-center gap-1 flex-shrink-0">
          {value && (
            <button type="button" onClick={handleClear} className="text-gray-400 hover:text-red-500 transition-colors p-0.5 rounded">
              <X size={13} />
            </button>
          )}
          <ChevronDown size={15} className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </div>
      </div>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
          {/* Search input */}
          <div className="p-3 border-b border-gray-100">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search job role..."
                className="w-full pl-8 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a227]/40 focus:border-[#c9a227] transition-all"
              />
            </div>
          </div>

          {/* Options list */}
          <ul className="max-h-56 overflow-y-auto py-1">
            {filtered.length === 0 ? (
              <li className="px-4 py-3 text-sm text-gray-400 text-center">No results found</li>
            ) : (
              filtered.map(job => (
                <li
                  key={job}
                  onClick={() => handleSelect(job)}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                    value === job
                      ? 'bg-[#0d0d3b] text-white font-semibold'
                      : 'text-gray-700 hover:bg-[#c9a227]/8 hover:text-[#0d0d3b]'
                  }`}
                >
                  {job}
                  {value === job && <CheckCircle size={14} className="flex-shrink-0" />}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
      {options.map((opt) => {
        const checked = selected.includes(opt);
        return (
          <label key={opt} className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border text-sm font-semibold cursor-pointer transition-all duration-200 ${
            checked
              ? 'bg-[#c9a227] border-[#c9a227] text-white shadow-sm'
              : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-[#c9a227] hover:bg-[#c9a227]/5'
          }`}>
            <input type="checkbox" className="sr-only" checked={checked} onChange={() => toggle(opt)} />
            {checked && <CheckCircle size={12} className="flex-shrink-0" />}
            {opt}
          </label>
        );
      })}
    </div>
  );
}

export default function RegisterAlumniPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploadPreview, setUploadPreview] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '', email: '', mobile: '', whatsapp: '',
    country: 'India', countryOther: '', postalAddress: '',
    dob: '', maritalStatus: '', gender: '',
    standardLastAttended: '', passoutYear: '', standardsAttended: [] as string[],
    educationLevel: '', educationLevelOther: '', schoolCollegeName: '',
    jobRole: '', jobRoleOther: '', sector: '', sectorOther: '', company: '',
    facebook: '', instagram: '', areaOfInterest: '', fondestMemory: '', shareContact: '',
    profilePhoto: '',
    currentCity: '', qualification: '', college: '', admissionNumber: '',
  });

  const set = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    set(e.target.name, e.target.value);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadPreview(URL.createObjectURL(file));
    setUploading(true); setUploadError('');
    const uploadData = new FormData();
    uploadData.append('file', file);
    try {
      const res = await fetch('/api/alumni/upload', { method: 'POST', body: uploadData });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to upload image.');
      setFormData(prev => ({ ...prev, profilePhoto: result.url }));
    } catch (err: unknown) {
      setUploadError(err instanceof Error ? err.message : 'Image upload failed.');
    } finally { setUploading(false); }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setError(''); setSuccess('');
    try {
      const payload = {
        ...formData,
        currentCity: formData.country === 'Other' ? formData.countryOther : formData.country,
        qualification: formData.educationLevel === 'Other' ? formData.educationLevelOther : formData.educationLevel,
        college: formData.schoolCollegeName,
        jobRole: formData.jobRole === 'Other' ? formData.jobRoleOther : formData.jobRole,
      };
      const res = await fetch('/api/alumni/register', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');
      setSuccess(data.message);
      setTimeout(() => router.push('/alumni'), 3000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7f2] via-white to-[#f0ede3] py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto mb-10 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c9a227]/10 border border-[#c9a227]/20 text-[#c9a227] text-xs font-bold uppercase tracking-wider mb-4">
          Alumni Registration
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0d0d3b] mb-3 font-playfair">
          Join the MM Alumni Network
        </h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
          Fill in the details below to become part of our verified alumni directory.
          Fields marked with <span className="text-red-500 font-bold">*</span> are required.
        </p>
      </div>

      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto">

        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-5 py-3.5 rounded-2xl text-sm flex items-start gap-2">
            <span className="font-bold flex-shrink-0">⚠</span> {error}
          </div>
        )}
        {success && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-5 py-3.5 rounded-2xl text-sm flex items-center gap-2">
            <CheckCircle size={16} className="flex-shrink-0" /> {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* SECTION 1: Personal Information */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <SectionHeader icon={User} title="Personal Information" subtitle="Your basic details for identification" />
            <div className="space-y-5">
              <FormInput label="Name (In Capital)" required>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                  placeholder="E.g: AKASH K" className={inputClass} />
                <p className="text-xs text-gray-400 mt-1">Enter name then initials after space without &quot;.&quot; — E.g: AKASH K</p>
              </FormInput>

              <FormInput label="Birth Date" required>
                <input type="date" name="dob" required value={formData.dob} onChange={handleChange} className={inputClass} />
              </FormInput>

              <FormInput label="Marital Status" required>
                <RadioGroup name="maritalStatus" options={MARITAL_STATUS} value={formData.maritalStatus} onChange={(v) => set('maritalStatus', v)} />
              </FormInput>

              <FormInput label="Gender" required>
                <RadioGroup name="gender" options={GENDERS} value={formData.gender} onChange={(v) => set('gender', v)} />
              </FormInput>
            </div>
          </div>

          {/* SECTION 2: Contact Details */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <SectionHeader icon={Phone} title="Contact Details" subtitle="How we can reach you" />
            <div className="space-y-5">
              <FormInput label="Email" required>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="your@email.com" className={inputClass} />
              </FormInput>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormInput label="Mobile Number" required>
                  <input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </FormInput>
                <FormInput label="WhatsApp Number" required>
                  <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX" className={inputClass} />
                </FormInput>
              </div>

              <FormInput label="Current Country of Residence" required>
                <RadioGroup name="country" options={['India', 'Other']} value={formData.country} onChange={(v) => set('country', v)} />
                {formData.country === 'Other' && (
                  <input type="text" name="countryOther" value={formData.countryOther} onChange={handleChange}
                    placeholder="Enter your country" className={`${inputClass} mt-3`} />
                )}
              </FormInput>

              <FormInput label="Your Postal Address (for correspondence)" required>
                <textarea name="postalAddress" required value={formData.postalAddress} onChange={handleChange}
                  rows={3} placeholder="Enter your full postal address..." className={`${inputClass} resize-none`} />
              </FormInput>
            </div>
          </div>

          {/* SECTION 3: Academic History at MM */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <SectionHeader icon={BookOpen} title="Academic History at MM School" subtitle="Your time at MM Mat Hr Sec School" />
            <div className="space-y-5">
              <FormInput label="Standard Last Attended" required>
                <StyledSelect name="standardLastAttended" value={formData.standardLastAttended} onChange={handleChange} required>
                  <option value="">Select standard...</option>
                  {STANDARDS_LAST.map(s => <option key={s} value={s}>{s}</option>)}
                </StyledSelect>
              </FormInput>

              <FormInput label="Passing Out Year" required>
                <input type="text" name="passoutYear" required value={formData.passoutYear} onChange={handleChange}
                  placeholder="ex: 2001-2002" className={inputClass} />
              </FormInput>

              <FormInput label="Check All Standards Attended at MM School" required>
                <CheckboxGrid options={STANDARDS} selected={formData.standardsAttended}
                  onChange={(val) => setFormData(prev => ({ ...prev, standardsAttended: val }))} />
              </FormInput>
            </div>
          </div>

          {/* SECTION 4: Education After MM */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <SectionHeader icon={GraduationCap} title="Education After MM School" subtitle="Your academic journey after leaving MM" />
            <div className="space-y-5">
              <FormInput label="Highest Level of Education After Leaving MM School" required>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {EDUCATION_LEVELS.map((level) => (
                    <label key={level} className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium cursor-pointer transition-all duration-200 ${
                      formData.educationLevel === level
                        ? 'bg-[#0d0d3b] border-[#0d0d3b] text-white shadow-md'
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-[#c9a227] hover:bg-[#c9a227]/5'
                    }`}>
                      <input type="radio" name="educationLevel" value={level} checked={formData.educationLevel === level}
                        onChange={() => set('educationLevel', level)} className="sr-only" />
                      <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        formData.educationLevel === level ? 'border-white' : 'border-gray-400'}`}>
                        {formData.educationLevel === level && <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />}
                      </span>
                      {level}
                    </label>
                  ))}
                </div>
                {formData.educationLevel === 'Other' && (
                  <input type="text" name="educationLevelOther" value={formData.educationLevelOther} onChange={handleChange}
                    placeholder="Please specify..." className={`${inputClass} mt-3`} />
                )}
              </FormInput>

              <FormInput label="Name of School / College / University / Others">
                <input type="text" name="schoolCollegeName" value={formData.schoolCollegeName} onChange={handleChange}
                  placeholder="e.g. Anna University, Chennai" className={inputClass} />
              </FormInput>
            </div>
          </div>

          {/* SECTION 5: Professional Details */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <SectionHeader icon={Briefcase} title="Professional Details" subtitle="Your current career information" />
            <div className="space-y-5">
              <FormInput label="Current Job" required>
                <StyledSelect name="jobRole" value={formData.jobRole} onChange={handleChange} required>
                  <option value="">Select your profession...</option>
                  {JOB_ROLES.map(j => <option key={j} value={j}>{j}</option>)}
                </StyledSelect>
                {formData.jobRole === 'Other' && (
                  <input type="text" name="jobRoleOther" value={formData.jobRoleOther} onChange={handleChange}
                    placeholder="Please specify your job..." className={`${inputClass} mt-3`} />
                )}
              </FormInput>

              <FormInput label="Are You Working in the Private or Government Sector" required>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {SECTORS.map((sector) => (
                    <label key={sector} className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium cursor-pointer transition-all duration-200 ${
                      formData.sector === sector
                        ? 'bg-[#0d0d3b] border-[#0d0d3b] text-white shadow-md'
                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-[#c9a227] hover:bg-[#c9a227]/5'
                    }`}>
                      <input type="radio" name="sector" value={sector} checked={formData.sector === sector}
                        onChange={() => set('sector', sector)} className="sr-only" />
                      <span className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        formData.sector === sector ? 'border-white' : 'border-gray-400'}`}>
                        {formData.sector === sector && <span className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />}
                      </span>
                      {sector}
                    </label>
                  ))}
                </div>
                {formData.sector === 'Other' && (
                  <input type="text" name="sectorOther" value={formData.sectorOther} onChange={handleChange}
                    placeholder="Please specify sector..." className={`${inputClass} mt-3`} />
                )}
              </FormInput>

              <FormInput label="Name of Organization / Company You Are Working With">
                <input type="text" name="company" value={formData.company} onChange={handleChange}
                  placeholder="Ex. Cognizant, Chennai" className={inputClass} />
              </FormInput>
            </div>
          </div>

          {/* SECTION 6: Social Media */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <SectionHeader icon={Globe} title="Social Media" subtitle="Stay connected with the community" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <FormInput label="Your Facebook ID">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <input type="text" name="facebook" value={formData.facebook} onChange={handleChange}
                    placeholder="facebook.com/yourprofile" className={`${inputClass} pl-9`} />
                </div>
              </FormInput>
              <FormInput label="Your Instagram ID">
                <div className="relative">
                  <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <input type="text" name="instagram" value={formData.instagram} onChange={handleChange}
                    placeholder="@yourhandle" className={`${inputClass} pl-9`} />
                </div>
              </FormInput>
            </div>
          </div>

          {/* SECTION 7: About You */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <SectionHeader icon={Star} title="About You" subtitle="Let your batchmates know more about you" />
            <div className="space-y-5">
              <FormInput label="Area of Interest">
                <input type="text" name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange}
                  placeholder="e.g. Technology, Arts, Sports, Music..." className={inputClass} />
              </FormInput>

              <FormInput label="Fondest Memories of Life at MM Mat Hr Sec School" required>
                <textarea name="fondestMemory" required value={formData.fondestMemory} onChange={handleChange}
                  rows={4} placeholder="Share your best memories from school..." className={`${inputClass} resize-none`} />
              </FormInput>

              <FormInput label="If Requested, Can We Share Your Contact Info with Classmates/Schoolmates?" required>
                <RadioGroup name="shareContact" options={CONTACT_SHARE} value={formData.shareContact} onChange={(v) => set('shareContact', v)} />
              </FormInput>
            </div>
          </div>

          {/* SECTION 8: Profile Photo */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
            <SectionHeader icon={Camera} title="Profile Photo" subtitle="Optional — a professional headshot works best" />
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#1a1a5e] to-[#252580] overflow-hidden flex items-center justify-center text-white border-4 border-white shadow-lg ring-4 ring-[#c9a227]/20 flex-shrink-0">
                {uploadPreview ? (
                  <img src={uploadPreview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-3xl font-bold font-playfair uppercase">
                    {formData.fullName ? formData.fullName.charAt(0) : '?'}
                  </span>
                )}
                {uploading && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white" />
                  </div>
                )}
              </div>
              <div className="flex-1 w-full">
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Upload Photo (Optional)</label>
                <input type="file" accept="image/*" onChange={handleImageChange}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#c9a227]/10 file:text-[#c9a227] hover:file:bg-[#c9a227]/20 cursor-pointer transition-all" />
                {uploadError && <p className="text-xs text-red-600 mt-2 font-medium">{uploadError}</p>}
                {!uploadError && !uploading && formData.profilePhoto && (
                  <p className="text-xs text-green-600 mt-2 font-medium flex items-center gap-1">
                    <CheckCircle size={12} /> Image uploaded successfully!
                  </p>
                )}
                <p className="text-xs text-gray-400 mt-2">Square crop works best. Max 5MB.</p>
              </div>
            </div>
          </div>

          {/* Submit Bar */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/alumni" className="text-gray-500 hover:text-[#0d0d3b] font-semibold text-sm transition-colors">
              ← Back to Alumni Page
            </Link>
            <button type="submit" disabled={loading || uploading || !!success}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0d0d3b] to-[#1a1a5e] text-white px-8 py-3.5 rounded-2xl font-bold text-sm hover:from-[#1a1a5e] hover:to-[#252580] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#0d0d3b]/20 hover:shadow-xl hover:shadow-[#0d0d3b]/30 hover:-translate-y-0.5">
              {uploading ? 'Uploading Photo...' : loading ? 'Submitting...' : success ? '✓ Registered!' : (
                <><span>Register as Alumni</span><ArrowRight size={16} /></>
              )}
            </button>
          </div>

        </form>
      </motion.div>
    </div>
  );
}
