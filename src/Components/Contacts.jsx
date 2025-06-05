import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, MessageCircle, Instagram } from 'lucide-react';

function Contact() {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "somsubhrochakraborty07@gmail.com",
      link: "somsubhrochakraborty07@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9875468253",
      link: "+91 9875468253"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kolkata, IND",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/SomsubhroChakraborty",
      color: "hover:text-gray-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/somsubhro-chakraborty-915852247/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/",
      color: "hover:text-blue-300"
    },
 

  ];

  return (
    <div className="bg-[#111111] min-h-screen py-10 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let's Work
            <span className="bg-gradient-to-r from-[#8245ec] to-[#C445FF] bg-clip-text text-transparent"> Together</span>
          </h1>
          <div className="flex flex-col items-center">
            <div className="w-[2px] h-8 md:h-12 bg-[#8245ec]"></div>
            <div className="w-2 h-2 bg-[#8245ec] rounded-full mt-[2px]"></div>
          </div>
          <p className="text-white/60 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life. 
            I'm always excited to work on new challenges and create amazing experiences.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get In Touch</h2>
              <p className="text-white/60">Feel free to reach out through any of these channels. I'm always happy to connect!</p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="block bg-[#1A1A1A] border border-white/10 rounded-lg p-6 hover:border-[#8245ec] hover:bg-[#1A1A1A]/80 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-r from-[#8245ec] to-[#C445FF] rounded-lg text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                      <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`p-3 bg-[#1A1A1A] border border-white/10 rounded-lg text-white/60 hover:border-[#8245ec] transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for new projects</span>
              </div>
              <p className="text-white/60 text-sm">
                Currently accepting new freelance projects and collaborations. Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;