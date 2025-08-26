import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Chatbot from "@/components/Chatbot";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      category: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      description: "Contactez-nous directement",
      value: "+225 XX XX XX XX XX",
      action: "Ouvrir WhatsApp",
      primary: true
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Support général",
      value: "contact@etudiant-ivoirien.com",
      action: "Envoyer un email"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      description: "Du lundi au vendredi",
      value: "+225 XX XX XX XX XX",
      action: "Appeler"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      description: "Nous rendre visite",
      value: "Abidjan, Côte d'Ivoire",
      action: "Voir sur la carte"
    }
  ];

  const faqs = [
    {
      question: "Comment puis-je accéder aux cours ?",
      answer: "Il suffit de créer un compte gratuit pour accéder à tous nos cours et exercices."
    },
    {
      question: "Les cours sont-ils vraiment gratuits ?",
      answer: "Oui, tous nos contenus éducatifs sont entièrement gratuits pour tous les étudiants."
    },
    {
      question: "Puis-je télécharger les cours ?",
      answer: "Absolument ! Tous les cours sont téléchargeables au format PDF."
    },
    {
      question: "Comment puis-je proposer du contenu ?",
      answer: "Contactez-nous via le formulaire ci-dessous ou par WhatsApp pour devenir contributeur."
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      value: "50K+",
      label: "Étudiants actifs"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      value: "1000+",
      label: "Cours disponibles"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      value: "95%",
      label: "Satisfaction"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      value: "24h",
      label: "Temps de réponse"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <MessageCircle className="h-4 w-4" />
              Nous sommes là pour vous aider
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6 animate-fade-in">
              Contactez-nous
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in">
              Une question ? Un problème ? Une suggestion ? Notre équipe est à votre écoute 
              pour vous accompagner dans votre parcours éducatif.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Plusieurs façons de nous contacter</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choisissez le moyen de communication qui vous convient le mieux. 
              Nous nous engageons à vous répondre rapidement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${method.primary ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full ${method.primary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">
                    {method.title}
                    {method.primary && <Badge className="ml-2" variant="secondary">Recommandé</Badge>}
                  </CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground mb-4">{method.value}</p>
                  <Button 
                    variant={method.primary ? "default" : "outline"} 
                    className="w-full"
                  >
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Nom complet *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Votre nom"
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
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium mb-2">
                        Catégorie
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Sélectionnez une catégorie</option>
                        <option value="support-technique">Support technique</option>
                        <option value="contenu">Question sur le contenu</option>
                        <option value="suggestion">Suggestion d'amélioration</option>
                        <option value="partenariat">Partenariat</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Sujet *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Résumé de votre message"
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
                        placeholder="Décrivez votre demande en détail..."
                        rows={6}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Questions fréquentes</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-3">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-6 bg-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <MessageCircle className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Besoin d'aide immédiate ?</h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    Notre chatbot IA peut répondre à la plupart de vos questions instantanément.
                  </p>
                  <Button variant="outline" size="sm">
                    Ouvrir le chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
      <Chatbot />
    </div>
  );
};

export default Contact;