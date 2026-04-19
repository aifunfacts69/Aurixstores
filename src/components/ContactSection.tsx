import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary mb-3 font-body">Get in Touch</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h2>
        <p className="text-muted-foreground mb-12 font-body text-lg">
          Interested in a timepiece? Reach out to us directly — we're happy to assist.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="tel:9440376264"
            className="flex items-center gap-4 p-6 bg-secondary rounded-lg border border-border card-hover group"
          >
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
              <Phone size={20} className="text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-body">Phone</p>
              <p className="text-foreground font-semibold font-body">+91 9440376264</p>
            </div>
          </a>

          <a
            href="mailto:aurixstores@gmail.com"
            className="flex items-center gap-4 p-6 bg-secondary rounded-lg border border-border card-hover group"
          >
            <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center shrink-0">
              <Mail size={20} className="text-primary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-body">Email</p>
              <p className="text-foreground font-semibold font-body">aurixstores@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
