import React, { useState } from 'react';
import {
  X,
  Users,
  Clock,
  DollarSign,
  User,
  Mail,
  FileText,
  MessageSquare,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import Yup from '@/lib/Yup';
import { useFormik } from 'formik'
import Sendmail from '@/lib/Sendmail';

const GetAQuoteModal = ({ quotation, isOpen, onClose }) => {
  const [isSending, setIsSending] = useState(false)
  const form = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      projectName: '',
      projectDescription: ''
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required('Full name is required.'),
      email: Yup.string().required('Email is required.').email('Invalid email address'),
      projectName: Yup.string().required('Project name is required.')
    }),
    onSubmit(values) {
      setIsSending(true)
      Sendmail({
        fullName: values.fullname,
        email: values.email,
        projectName: values.projectName,
        projectDescription: values.projectDescription,
        teamSize: quotation.teamSize,
        duration: quotation.duration,
        estimatedCost: quotation.estimatedCost
      }).then(() => {

      }).finally(() => {
        setIsSending(false)
        form.resetForm()
        onClose()
      })
    }
  })
  if (!isOpen) return null;

  return (
    // Outer container handles the scrolling for the whole screen
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Flex container to center the modal vertically and horizontally */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all scale-100"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Section */}
          <div className="bg-[#111827] p-6 pt-8 pb-8 relative">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-1 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="text-lime-400" size={18} />
              <span className="text-xs font-bold tracking-wider text-white uppercase">Get Your Quote</span>
            </div>

            <h2 className="text-3xl font-bold text-white mb-2">Let's build something amazing</h2>
            <p className="text-slate-400 text-sm">Fill in your details and we'll send you a comprehensive quote instantly</p>
          </div>

          {/* Configuration Summary Strip */}
          <div className="bg-slate-50 px-6 py-5 border-b border-slate-100">
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-4 tracking-wide">Your Configuration</h3>
            <div className="grid grid-cols-3 gap-4">

              {/* Team Size */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-lime-100 rounded-lg text-lime-700">
                    <Users size={16} />
                  </div>
                  <span className="text-xs font-medium text-slate-500">Team Size</span>
                </div>
                <p className="text-sm font-bold text-slate-900 pl-1">{quotation.teamSize} devs</p>
              </div>

              {/* Duration */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-lime-100 rounded-lg text-lime-700">
                    <Clock size={16} />
                  </div>
                  <span className="text-xs font-medium text-slate-500">Duration</span>
                </div>
                <p className="text-sm font-bold text-slate-900 pl-1">{quotation.sprints} weeks</p>
              </div>

              {/* Cost */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-lime-100 rounded-lg text-lime-700">
                    <DollarSign size={16} />
                  </div>
                  <span className="text-xs font-medium text-slate-500">Est. Cost</span>
                </div>
                <p className="text-sm font-bold text-slate-900 pl-1">₱{quotation.calculatePrice}</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="p-6 bg-white">
            <div className="space-y-4">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Full Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="text-slate-400" size={18} />
                  </div>
                  <input
                    type="text"
                    name={'fullname'}
                    className={[
                      "w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-slate-700 placeholder-slate-400 bg-white",
                      form.errors.fullname ? 'border-red-400' : 'border-slate-200'
                    ].join(' ')}
                    placeholder=""
                    value={form.values.fullname}
                    onChange={form.handleChange}
                  />
                </div>
                {
                  form.errors.fullname && (
                    <p className='text-red-400 text-sm'>{form.errors.fullname}</p>
                  )
                }
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Email Address *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="text-slate-400" size={18} />
                  </div>
                  <input
                    type="email"
                    className={[
                      "w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-slate-700 placeholder-slate-400 bg-white",
                      form.errors.email ? 'border-red-400' : 'border-slate-200'
                    ].join(' ')}
                    placeholder=""
                    name={'email'}
                    value={form.values.email}
                    onChange={form.handleChange}
                  />
                </div>
                {
                  form.errors.email && (
                    <p className='text-red-400 text-sm'>{form.errors.email}</p>
                  )
                }
              </div>

              {/* Project Name */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Project Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FileText className="text-slate-400" size={18} />
                  </div>
                  <input
                    type="text"
                    className={[
                      "w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-slate-700 placeholder-slate-400 bg-white",
                      form.errors.projectName ? 'border-red-400' : 'border-slate-200'
                    ].join(' ')}
                    placeholder=""
                    name={'projectName'}
                    value={form.values.projectName}
                    onChange={form.handleChange}
                  />
                </div>
                {
                  form.errors.projectName && (
                    <p className='text-red-400 text-sm'>{form.errors.projectName}</p>
                  )
                }
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">Project Description (Optional)</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="text-slate-400" size={18} />
                  </div>
                  <textarea
                    // @ts-ignore
                    rows="4"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none transition-all text-slate-700 placeholder-slate-400 bg-white resize-none"
                    placeholder=""
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                // @ts-ignore
                onClick={form.handleSubmit}
                className="w-full bg-[#d2f45d] hover:bg-[#c2e44d] text-slate-900 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors mt-6 shadow-sm hover:shadow-md"
              >
                {
                  isSending ? 'Sending Quotation' : 'Get My Quote'
                }
                <ArrowRight size={20} />
              </button>

              {/* Disclaimer */}
              <p className="text-center text-xs text-slate-500 mt-4">
                We'll email you a detailed quote summary. Your information is secure and never shared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GetAQuoteModal 
