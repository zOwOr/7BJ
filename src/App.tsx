import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Building2,
  Wrench,
  Home,
  Factory,
  ShoppingCart,
  Loader as Road,
  Users,
  ChevronDown,
  Star,
  Award,
  Shield,
  Zap,
  Target,
  Heart,
  Sparkles,
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Globe,
  Settings,
  Hammer,
  Truck,
  PenTool,
} from "lucide-react";
import logo from "./img/logo.png";
import logoDark from "./img/logoDark.png";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Gracias por su mensaje. Nos pondremos en contacto con usted pronto."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const valores = [
    {
      name: "Innovación",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Seguridad",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Trabajo en equipo",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Responsabilidad",
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Calidad",
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Respeto",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Excelencia",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const servicios = [
    {
      category: "Diseño",
      icon: <PenTool className="w-10 h-10" />,
      color: "from-blue-600 to-blue-800",
      description:
        "Diseñamos y construimos proyectos con altos estándares de calidad, innovación, eficiencia, cuidado del medio ambiente y seguridad.",
      features: ["CAD/BIM", "Modelado 3D", "Renders fotorrealistas"],
    },
    {
      category: "Construcción",
      icon: <Hammer className="w-10 h-10" />,
      color: "from-orange-600 to-red-600",
      description:
        "Sistema de gestión y control de calidad en todas las etapas: diseño, planeación, construcción y supervisión.",
      features: [
        "Control de calidad",
        "Supervisión técnica",
        "Gestión integral",
      ],
    },
    {
      category: "Proyectos Industriales",
      icon: <Factory className="w-10 h-10" />,
      color: "from-gray-600 to-gray-800",
      description:
        "Proyectos integrales de infraestructura e industriales, proyectos estructurales, estudios topográficos, mecánica de suelos y control de calidad.",
      features: [
        "Infraestructura",
        "Instalaciones especiales",
        "Estudios técnicos",
      ],
    },
    {
      category: "Proyectos Residenciales",
      icon: <Home className="w-10 h-10" />,
      color: "from-green-600 to-emerald-600",
      description:
        "Vivienda unifamiliar, edificios de apartamentos, complejos residenciales, desarrollo de vivienda social y vivienda de lujo.",
      features: [
        "Vivienda unifamiliar",
        "Complejos residenciales",
        "Vivienda de lujo",
      ],
    },
    {
      category: "Proyectos Comerciales",
      icon: <ShoppingCart className="w-10 h-10" />,
      color: "from-purple-600 to-indigo-600",
      description:
        "Ampliación de naves para almacenamiento de materiales y proyectos comerciales diversos.",
      features: [
        "Naves industriales",
        "Centros comerciales",
        "Oficinas corporativas",
      ],
    },
    {
      category: "Obra Civil",
      icon: <Truck className="w-10 h-10" />,
      color: "from-yellow-600 to-orange-600",
      description:
        "Plataformas para perforación, vialidades y carreteras, sistemas pluviales, pavimentación y concreto hidráulico de alta resistencia.",
      features: ["Vialidades", "Pavimentación", "Sistemas pluviales"],
    },
    {
      category: "Consultoría",
      icon: <Settings className="w-10 h-10" />,
      color: "from-teal-600 to-cyan-600",
      description:
        "Asesoría en planeación, diseño, presupuestos, evaluación de riesgos, gestión y supervisión de proyectos.",
      features: [
        "Planeación estratégica",
        "Evaluación de riesgos",
        "Supervisión",
      ],
    },
  ];

  const stats = [
    {
      number: "Hacemos",
      label: "Tus Proyectos",
      icon: <CheckCircle className="w-8 h-8" />,
    },
    {
      number: "Atencion ",
      label: "Personalizada Durante Tu Proyecto",
      icon: <TrendingUp className="w-8 h-8" />,
    },
    {
      number: "Garantizamos",
      label: "Clientes Satisfechos",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "24/7",
      label: "Soporte Técnico",
      icon: <Globe className="w-8 h-8" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 top-0 transition-all duration-500 ${
          scrollY > 50
            ? "bg-white/95 backdrop-blur-lg shadow-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-40">
            <div className="flex items-center">
              <div className="flex-shrink-0 group cursor-pointer">
                <div className="relative">
                  <img
                    src={scrollY > 50 ? logo : logoDark}
                    alt="Logo"
                    className={`w-36 transition-all duration-300 ${
                      scrollY > 50 ? "opacity-80" : "opacity-100"
                    } group-hover:scale-110`}
                  />

                  <div className="absolute -inset-2 bg-gradient-to-r from-black via-[#6FD923] to-[#6FD923]/30 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["inicio", "valores", "mision", "servicios"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                      scrollY > 50
                        ? "text-slate-700 hover:text-blue-900"
                        : "text-white hover:text-blue-200"
                    } hover:bg-white/10 backdrop-blur-sm`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-100 transition-all duration-300 hover:w-full"></div>
                  </button>
                )
              )}
              <button
                onClick={() => scrollToSection("contacto")}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse"
              >
                <span className="flex items-center space-x-2">
                  <span>Contacto</span>
                  <Sparkles className="w-4 h-4" />
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  scrollY > 50
                    ? "text-slate-700 hover:text-blue-900"
                    : "text-white"
                } hover:bg-white/10 backdrop-blur-sm`}
              >
                <div className="relative">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-white/20 animate-slideDown">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {["inicio", "valores", "mision", "servicios", "contacto"].map(
                  (item, index) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-blue-50 rounded-lg transition-all duration-300 transform hover:translate-x-2"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center overflow-hidden pt-24"
      >
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5AC41F]/30 via-[#0D0D0D]/75 to-[#5AC41F]/30 z-10"></div>
          <img
            src="/src/img/hero.png"
            alt="Construction background"
            className="w-full h-full object-cover"
          />
          {/* Animated overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/20 via-[#0D0D0D]/20 to-[#0D0D0D]/30 animate-pulse z-5"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 z-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.inicio
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <h1 className="text-4xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full animate-bounce">
                  ✨ Empresa Líder en Construcción
                </span>
                <br />
                <span className="text-3xl lg:text-5xl text-blue-200">
                  Diseño y Construcción
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed animate-fadeInUp">
                Somos una empresa mexicana creada con la firme convicción de
                generar
                <strong className="text-white animate-pulse">
                  {" "}
                  soluciones integrales de valor
                </strong>{" "}
                en ingeniería y arquitectura. Buscamos la excelencia,
                responsabilidad y calidad como carta de presentación en todos
                nuestros proyectos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-2xl hover:shadow-orange-500/25"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>Contáctanos</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="group border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm bg-white/10"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Ver Servicios</span>
                  </span>
                </button>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible.inicio
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0D0D0D]/40 to-[#0D0D0D]/10 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <img
                    src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Construcción profesional"
                    className="rounded-2xl w-full h-80 object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white p-6 rounded-2xl shadow-2xl animate-bounce">
                    <div className="flex items-center space-x-2">
                      <Award className="w-6 h-6" />
                      <div>
                        <p className="font-bold text-sm">
                          Proyectos de Calidad
                        </p>
                        <p className="text-xs opacity-90"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center transform transition-all duration-1000 ${
                  isVisible.inicio
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="text-white mb-2 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/70" />
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section
        id="valores"
        className="py-24 bg-gradient-to-br from-[#F0FDF4] to-[#E0F7FA] relative overflow-hidden"
      >
        {/* Background glow blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-[#6FD923]/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.valores
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#6FD923] to-green-600 text-white text-sm font-semibold rounded-full shadow-lg">
              💎 Nuestros Principios
            </span>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#6FD923] to-green-700 bg-clip-text text-transparent mb-6">
              Nuestros Valores
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Los principios que guían cada uno de nuestros proyectos y nos
              definen como empresa.
            </p>
          </div>

          {/* Valores Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-500 ease-out hover:scale-125 hover:z-20 ${
                  isVisible.valores
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Glow overlay */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6FD923]/40 to-[#6FD923]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-green-400">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${valor.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
                  >
                    {valor.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#6FD923] transition-colors duration-500">
                    {valor.name}
                  </h3>
                  <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-[#6FD923] to-green-600 transition-all duration-500 rounded-full"></div>
                  <p className="mt-4 text-slate-600 group-hover:text-slate-800 transition-colors duration-500">
                    {valor.description || "Descripción breve de este valor."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión, Visión, Política Section */}
      <section
        id="mision"
        className="py-24 bg-gradient-to-br from-[#F0FDF4] to-[#E0F7FA] relative overflow-hidden"
      >
        {/* Fondo decorativo opcional */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.mision
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white text-sm font-semibold rounded-full">
                🎯 Nuestra Identidad
              </span>
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 to-green-900 bg-clip-text text-transparent mb-6">
              Quiénes Somos
            </h2>
          </div>

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Misión",
                icon: <Building2 className="w-10 h-10" />,
                color: "from-blue-600 to-blue-800",
                content:
                  "Brindar servicios de diseño y construcción con altos estándares de calidad, innovación tecnológica y seguridad, ofreciendo soluciones sostenibles con enfoque en excelencia.",
              },
              {
                title: "Visión",
                icon: <Target className="w-10 h-10" />,
                color: "from-orange-600 to-red-600",
                content:
                  "Ser reconocida como líder en diseño y construcción, referencia en prácticas constructivas sostenibles e innovadoras.",
              },
              {
                title: "Política de Calidad",
                icon: <Award className="w-10 h-10" />,
                color: "from-green-600 to-emerald-600",
                content:
                  "Compromiso con los clientes mediante mejora continua, brindando confianza y soluciones profesionales.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-1000 hover:scale-105 ${
                  isVisible.mision
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur"></div>
                <div className="relative bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 h-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:rotate-6 transition-transform duration-300 shadow-lg`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4 group-hover:text-purple-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    {item.content}
                  </p>
                  <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section
        id="servicios"
        className="py-20 bg-gradient-to-br from-slate-900 to-green-500 relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-700/50 to-purple-900/50"></div>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.servicios
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-semibold rounded-full animate-pulse">
                🚀 Nuestras Especialidades
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Soluciones integrales en diseño, construcción e ingeniería para
              proyectos de cualquier escala
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-1000 hover:scale-105 ${
                  isVisible.servicios
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl blur"></div>
                <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${servicio.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform duration-300 shadow-2xl`}
                  >
                    {servicio.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
                    {servicio.category}
                  </h3>
                  <p className="text-blue-200 text-sm leading-relaxed mb-4">
                    {servicio.description}
                  </p>
                  <div className="space-y-2">
                    {servicio.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-blue-300"
                      >
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section
        id="contacto"
        className="py-20 bg-gradient-to-br  from-slate-900 to-green-500 relative relative overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.contacto
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-semibold rounded-full animate-bounce">
                📞 Hablemos
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">Contáctanos</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Estamos listos para hacer realidad su próximo proyecto.
              Comuníquese con nosotros hoy mismo
            </p>
          </div>
          <div className="grid lg:grid-cols-1 gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible.contacto
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              }`}
            >
              <div className="group flex items-center space-x-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-green-300 transition-colors">
                    Teléfonos
                  </h3>
                  <p className="text-blue-200 text-lg">
                    <a
                      href="https://wa.me/5218184646648"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      81 84 64 66 48
                    </a>
                  </p>
                  <p className="text-blue-200 text-lg">
                    <a
                      href="https://wa.me/5218132788670"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      81 32 78 86 70
                    </a>
                  </p>
                </div>
              </div>
              <div className="group flex items-center space-x-6 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-300 transition-colors">
                    Correos Electrónicos
                  </h3>
                  <p className="text-blue-200">
                    <a
                      href="mailto:benjamin.moreno@7bjproyectos.com"
                      className="hover:underline"
                    >
                      benjamin.moreno@7bjproyectos.com
                    </a>
                  </p>

                  <p className="text-blue-200">
                    <a
                      href="mailto:jorge.zuniga@7bjproyectos.com"
                      className="hover:underline"
                    >
                      jorge.zuniga@7bjproyectos.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-lg p-8 rounded-2xl border border-orange-500/30 group hover:from-orange-500/30 hover:to-red-500/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <Sparkles className="w-8 h-8 text-orange-400 group-hover:rotate-180 transition-transform duration-500" />
                  <h3 className="text-white font-bold text-2xl group-hover:text-orange-300 transition-colors">
                    ¿Listo para comenzar?
                  </h3>
                </div>
                <p className="text-blue-200 mb-6 text-lg">
                  Solicite una cotización para su proyecto de construcción o
                  diseño.
                </p>
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 font-semibold shadow-2xl">
                  <a href="mailto:benjamin.moreno@7bjproyectos.com">
                    <span className="flex items-center space-x-2">
                      <span>Solicitar Información</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </a>
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.contacto
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
            ></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">
                7BJ Proyectos
              </h3>
              <p className="text-slate-400 mb-4 font-semibold">
                Diseño y Construcción S.A. de C.V.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Soluciones integrales de valor en ingeniería y arquitectura con
                excelencia, responsabilidad y calidad.
              </p>
            </div>
            <div className="group">
              <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                Contacto Rápido
              </h4>
              <div className="space-y-2 text-slate-400 text-sm">
                <p className="hover:text-white transition-colors cursor-pointer">
                  <a
                    href="https://wa.me/5218184646648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    📞 Tel: 81 84 64 66 48
                  </a>
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  <a
                    href="https://wa.me/5218132788670"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    📞 Tel: 81 32 78 86 70
                  </a>
                </p>

                <p className="hover:text-white transition-colors cursor-pointer">
                  <a
                    href="mailto:benjamin.moreno@7bjproyectos.com"
                    className="hover:underline"
                  >
                    {" "}
                    ✉️ benjamin.moreno@7bjproyectos.com
                  </a>
                </p>
              </div>
            </div>
            <div className="group">
              <h4 className="text-lg font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">
                Servicios Principales
              </h4>
              <div className="space-y-1 text-slate-400 text-sm">
                <p className="hover:text-white transition-colors cursor-pointer">
                  🏗️ Diseño y Construcción
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  🏭 Proyectos Industriales
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  🏠 Proyectos Residenciales
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  💼 Consultoría
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 7BJ Proyectos Diseño y Construcción S.A. de C.V. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .animate-twinkle {
          animation: twinkle 2s infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
