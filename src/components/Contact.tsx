import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, ArrowUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import VisitorMap from "@/components/VisitorMap"; // 👈 Map component

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:prithwish2dey@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client...",
      description: "Your default email client will open with the message pre-filled.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prithwish2dey@gmail.com",
      link: "mailto:prithwish2dey@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/prithwish2dey",
      link: "https://github.com/prithwish2dey",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prithwish-dey-9a6267286",
      link: "https://linkedin.com/in/prithwish-dey-9a6267286",
    },
  ];

  return (
    // <section
    //   id="contact"
    //   className="relative w-full py-24 px-6 text-white bg-cover bg-center bg-no-repeat"
    //   style={{
    //     backgroundImage: "url('/backgrounds/backcontact.jpg')", // make sure this path is correct
    //   }}
    // >


      // <div className="max-w-6xl mx-auto">
      //   <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
      //     Get In <span className="text-primary">Touch</span>
      //   </h2>



      <section
  id="contact"
  className="relative w-full py-24 px-6 text-white overflow-hidden"
>
  {/* Background Image Layer with Brightness Filter */}
  <div
    className="absolute inset-0 bg-center bg-cover brightness-50"
    style={{
      backgroundImage: "url('/backgrounds/backcontact.jpg')",
      zIndex: 0,
    }}
  />

  {/* Foreground Content */}
  <div className="relative z-10 max-w-6xl mx-auto">
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text">
      Get In <span className="text-primary">Touch</span>
    </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-black/60 border-primary/20 hover:border-primary/50 transition-all hover:glow-effect">
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full glow-effect hover:scale-105 transition-transform"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about the latest developments in GenAI, Quantum Computing, and Mixed Reality. 
                Feel free to reach out!
              </p>
            </div>

            {/* Show only clickable label links */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="p-4 bg-black/60 border-primary/20 hover:border-primary/50 transition-all hover:glow-effect group"
                >
                  <a 
                    href={info.link}
                    target={info.link.startsWith('mailto:') ? undefined : '_blank'}
                    rel={info.link.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="flex items-center space-x-3 group-hover:text-primary transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-base font-medium">{info.label}</div>
                    <ArrowUp className="h-4 w-4 ml-auto rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-black/60 border-primary/20 hover:border-primary/50 transition-all">
              <h4 className="font-bold mb-3 text-primary">Quick Facts</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>📍 Arambagh, West Bengal, India</li>
                <li>🎓 Currently studying at IIIT Kalyani</li>
                <li>🔬 Actively researching on Technologies</li>
              </ul>
            </Card>
          </div>
        </div>
        <VisitorMap />
      </div>
    </section>
  );
};

export default Contact;
