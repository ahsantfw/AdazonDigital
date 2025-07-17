// "use client"
//
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Badge } from "@/components/ui/badge"
// import { Mail, Phone, MapPin, Clock, ArrowRight, CheckCircle } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"
// import { useState } from "react"
// import emailjs from '@emailjs/browser'
//
// export default function ContactPage() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
//
//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitStatus('idle')
//     
//     const formData = new FormData(e.currentTarget)
//     const data = {
//       firstName: formData.get('firstName'),
//       lastName: formData.get('lastName'),
//       email: formData.get('email'),
//       company: formData.get('company'),
//       budget: formData.get('budget'),
//       message: formData.get('message'),
//     }
//
//     try {
//       // Initialize EmailJS with your public key
//       emailjs.init("5-8ru7u7CHS1Z2pcE")
//       
//       const templateParams = {
//         to_email: 'support@adcertify.com',
//         from_name: `${data.firstName} ${data.lastName}`,
//         from_email: data.email,
//         company: data.company,
//         budget: data.budget,
//         message: data.message,
//         reply_to: data.email,
//       }
//
//       await emailjs.send(
//         'service_ey9tvz7',
//         'template_9v5ifh6',
//         templateParams
//       )
//
//       setSubmitStatus('success')
//       // Reset form safely
//       const form = e.currentTarget as HTMLFormElement
//       if (form) {
//         form.reset()
//       }
//     } catch (error) {
//       console.error('Email send failed:', error)
//       setSubmitStatus('error')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }
//
//   return (
//     <div>Contact page commented out. Form moved to main page.</div>
//   )
// }
