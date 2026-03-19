import { ExternalLink, Github, Linkedin, Mail, Code2, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DESIGN PHILOSOPHY: Premium Tech Aesthetic with Visual Richness
 * - Bold capital letters for strong visual hierarchy
 * - Prominent Discord profile picture as hero element
 * - Rich decorative elements and patterns
 * - Layered depth with multiple visual effects
 * - Vibrant cyan accents with dynamic animations
 */

interface DiscordStatus {
  username: string;
  status: "online" | "idle" | "dnd" | "offline";
  activity?: string;
  avatar?: string;
}

export default function Home() {
  const [discordStatus, setDiscordStatus] = useState<DiscordStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscordStatus = async () => {
      try {
        const userId = "780802313823584277";
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const data = await response.json();

        if (data.success) {
          const presence = data.data;
          setDiscordStatus({
            username: presence.username || "USER",
            status: presence.discord_status || "offline",
            activity: presence.activities?.[0]?.name,
            avatar: presence.avatar
              ? `https://cdn.discordapp.com/avatars/${presence.user_id}/${presence.avatar}.png`
              : undefined,
          });
        }
      } catch (error) {
        console.error("Failed to fetch Discord status:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscordStatus();
    const interval = setInterval(fetchDiscordStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const statusColor = {
    online: "#00d9ff",
    idle: "#ffa500",
    dnd: "#ff4444",
    offline: "#666666",
  };

  const links = [
    {
      name: "GITHUB",
      url: "https://github.com/Kp344",
      icon: Github,
      description: "VIEW MY PROJECTS",
    },
    {
      name: "LINKEDIN",
      url: "https://linkedin.com/in/yourprofile",
      icon: Linkedin,
      description: "CONNECT WITH ME",
    },
    {
      name: "EMAIL",
      url: "mailto:your.email@example.com",
      icon: Mail,
      description: "GET IN TOUCH",
    },
    {
      name: "PORTFOLIO",
      url: "/portfolio",
      icon: Code2,
      description: "VIEW MY WORK",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0f1419] to-[#0a0e14]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-accent/5 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Animated grid background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none -z-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full opacity-30 animate-pulse" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-accent rounded-full opacity-20 animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-accent rounded-full opacity-25 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-accent rounded-full opacity-20 animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-accent/10 backdrop-blur-md bg-background/50">
          <div className="container py-6 flex justify-between items-center">
            <h1 className="text-display text-3xl font-bold tracking-wider bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent">
              KUNJ
            </h1>
            <div className="flex gap-12 text-xs font-bold tracking-widest text-muted-foreground uppercase">
              <a
                href="#projects"
                className="hover:text-accent transition-all duration-300 relative group"
              >
                PROJECTS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="#links"
                className="hover:text-accent transition-all duration-300 relative group"
              >
                CONNECT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-accent/50 group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Left: Main content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 border border-accent/40 rounded-full bg-accent/5 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-xs font-bold tracking-widest text-accent uppercase">
                    CREATIVE DEVELOPER
                  </span>
                </div>
                <div className="space-y-3">
                  <h2 className="text-display text-6xl md:text-7xl font-bold leading-tight tracking-tighter uppercase">
                    CRAFTING
                  </h2>
                  <h2 className="text-display text-6xl md:text-7xl font-bold leading-tight tracking-tighter bg-gradient-to-r from-accent via-accent to-accent/60 bg-clip-text text-transparent uppercase">
                    DIGITAL MAGIC
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-mono tracking-wide">
                  BUILDING ELEGANT SOLUTIONS AT THE INTERSECTION OF DESIGN AND TECHNOLOGY. PASSIONATE ABOUT CLEAN CODE, THOUGHTFUL INTERFACES, AND MEANINGFUL PROJECTS THAT MAKE AN IMPACT.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-6">
                <a
                  href="#links"
                  className="group relative px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-bold text-sm uppercase tracking-widest overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent/50 transform hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    EXPLORE <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/20 to-accent/0 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </a>
                <a
                  href="https://github.com/Kp344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 border-2 border-accent/60 text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300 font-bold text-sm uppercase tracking-widest rounded-xl backdrop-blur-sm transform hover:scale-105"
                >
                  GITHUB
                </a>
              </div>
            </div>

            {/* Right: Discord Profile Widget */}
            <div className="md:sticky md:top-24 flex justify-center">
              <div className="group relative w-full max-w-sm">
                {/* Outer glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
                
                {/* Inner glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative border-2 border-accent/40 p-10 bg-gradient-to-br from-card/80 via-card/60 to-card/40 backdrop-blur-xl rounded-3xl hover:border-accent/80 transition-all duration-300 group-hover:bg-card/90 shadow-2xl">
                  <div className="space-y-8">
                    {/* Profile Picture Section */}
                    <div className="flex justify-center">
                      <div className="relative">
                        {/* Animated ring */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-accent via-accent/50 to-accent rounded-full blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-spin" style={{ animationDuration: "4s" }} />
                        
                        {/* Profile picture */}
                        {discordStatus?.avatar && (
                          <img
                            src={discordStatus.avatar}
                            alt={discordStatus.username}
                            className="relative w-32 h-32 rounded-full border-4 border-accent/60 ring-4 ring-background object-cover shadow-2xl group-hover:shadow-accent/50 transition-all duration-300"
                          />
                        )}
                        
                        {/* Status indicator */}
                        <div
                          className="absolute bottom-2 right-2 w-6 h-6 rounded-full border-4 border-background animate-pulse"
                          style={{
                            backgroundColor: statusColor[discordStatus?.status || "offline"],
                            boxShadow: `0 0 20px ${statusColor[discordStatus?.status || "offline"]}`,
                          }}
                        />
                      </div>
                    </div>

                    {/* User Info */}
                    <div className="text-center space-y-3">
                      <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                        ◆ DISCORD STATUS ◆
                      </p>
                      <p className="text-display font-bold text-3xl uppercase tracking-tight">
                        {loading ? "LOADING..." : discordStatus?.username || "OFFLINE"}
                      </p>
                    </div>

                    {/* Status badge */}
                    <div className="flex justify-center">
                      <div className="flex items-center gap-3 px-4 py-2 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm">
                        <div
                          className="w-3 h-3 rounded-full animate-pulse"
                          style={{
                            backgroundColor: statusColor[discordStatus?.status || "offline"],
                            boxShadow: `0 0 12px ${statusColor[discordStatus?.status || "offline"]}`,
                          }}
                        />
                        <span className="text-xs text-muted-foreground uppercase font-bold tracking-widest">
                          {discordStatus?.status || "OFFLINE"}
                        </span>
                      </div>
                    </div>

                    {/* Activity */}
                    {discordStatus?.activity && (
                      <div className="pt-6 border-t border-accent/20">
                        <p className="text-xs text-muted-foreground mb-3 font-mono uppercase tracking-widest">
                          ► CURRENT ACTIVITY
                        </p>
                        <p className="text-sm text-foreground font-bold uppercase tracking-wide">
                          {discordStatus.activity}
                        </p>
                      </div>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

                    {/* Last updated */}
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest text-center">
                      ↻ UPDATES EVERY 30S
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container py-12">
          <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>

        {/* Links Section */}
        <section id="links" className="container py-24">
          <div className="mb-16 space-y-4">
            <h3 className="text-display text-5xl font-bold uppercase tracking-tighter">
              CONNECT WITH ME
            </h3>
            <p className="text-muted-foreground text-lg font-mono uppercase tracking-widest">
              FIND ME ACROSS THE WEB
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden"
                >
                  {/* Glow background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                  
                  {/* Card */}
                  <div className="relative border-2 border-accent/30 p-8 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-lg rounded-2xl hover:border-accent/70 transition-all duration-300 group-hover:bg-card/80 transform group-hover:scale-105 group-hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl group-hover:from-accent/40 group-hover:to-accent/20 transition-all">
                            <Icon className="w-6 h-6 text-accent" />
                          </div>
                          <h4 className="text-display font-bold text-2xl uppercase tracking-tight group-hover:text-accent transition-colors">
                            {link.name}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="container py-12">
          <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        </div>

        {/* Projects Section */}
        <section id="projects" className="container py-24">
          <div className="mb-16 space-y-4">
            <h3 className="text-display text-5xl font-bold uppercase tracking-tighter">
              FEATURED PROJECTS
            </h3>
            <p className="text-muted-foreground text-lg font-mono uppercase tracking-widest">
              A SELECTION OF RECENT WORK
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "BAGUETTE CLICK",
                description: "INTERACTIVE WEB EXPERIENCE",
                link: "/Baguette_Click",
              },
              {
                title: "CROISSANT CLICK",
                description: "AUDIO-VISUAL PROJECT",
                link: "/Croissant_Click",
              },
              {
                title: "PORTFOLIO",
                description: "PROFESSIONAL SHOWCASE",
                link: "/english-portfolio",
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group relative overflow-hidden"
              >
                {/* Glow background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                
                {/* Card */}
                <div className="relative border-2 border-accent/30 p-8 bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-lg rounded-2xl hover:border-accent/70 transition-all duration-300 group-hover:bg-card/80 transform group-hover:scale-105 group-hover:-translate-y-1">
                  <div className="space-y-5">
                    <h4 className="text-display font-bold text-2xl uppercase tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-mono uppercase tracking-widest">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent text-sm pt-3 group-hover:gap-3 transition-all font-bold uppercase tracking-widest">
                      <span>VIEW</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-accent/10 mt-24">
          <div className="container py-12">
            <div className="flex justify-between items-center text-xs text-muted-foreground font-mono uppercase tracking-widest">
              <p>© 2026 KUNJ. ALL RIGHTS RESERVED.</p>
              <p>
                DESIGNED WITH <span className="text-accent font-bold">INTENTION</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
