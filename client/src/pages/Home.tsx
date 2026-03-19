import { ExternalLink, Github, Linkedin, Mail, Code2 } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * DESIGN PHILOSOPHY: Minimal Brutalist Tech with Visual Depth
 * - Raw, honest typography with generous negative space
 * - Monochromatic with cyan accents and gradient overlays
 * - Asymmetrical layout with smooth curves and depth
 * - Sophisticated micro-interactions and visual hierarchy
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
    // Fetch Discord status from Lanyard API
    const fetchDiscordStatus = async () => {
      try {
        const userId = "780802313823584277";
        const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
        const data = await response.json();

        if (data.success) {
          const presence = data.data;
          setDiscordStatus({
            username: presence.username || "User",
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
    // Poll every 30 seconds
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
      name: "GitHub",
      url: "https://github.com/Kp344",
      icon: Github,
      description: "View my projects",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      icon: Linkedin,
      description: "Connect with me",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: Mail,
      description: "Get in touch",
    },
    {
      name: "Portfolio",
      url: "/portfolio",
      icon: Code2,
      description: "View my work",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#0f1419]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid background pattern - subtle */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none -z-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 217, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 217, 255, 0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="border-b border-border/30 backdrop-blur-sm">
          <div className="container py-6 flex justify-between items-center">
            <h1 className="text-display text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              kunj
            </h1>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a
                href="#projects"
                className="hover:text-accent transition-colors duration-300 relative group"
              >
                projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
              <a
                href="#links"
                className="hover:text-accent transition-colors duration-300 relative group"
              >
                links
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left: Main content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-xs font-mono text-accent px-3 py-1 border border-accent/30 rounded-full bg-accent/5">
                    creative developer
                  </span>
                </div>
                <h2 className="text-display text-5xl md:text-6xl font-bold leading-tight">
                  Crafting Digital
                  <span className="block bg-gradient-to-r from-accent to-accent/50 bg-clip-text text-transparent">
                    Experiences
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Building elegant solutions at the intersection of design and
                  technology. Passionate about clean code, thoughtful interfaces,
                  and meaningful projects that make an impact.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href="#links"
                  className="group relative px-8 py-3 bg-accent text-accent-foreground font-mono text-sm overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                >
                  <span className="relative z-10">explore work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-white/10 to-accent/0 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </a>
                <a
                  href="https://github.com/Kp344"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-3 border border-accent/50 text-accent hover:border-accent hover:bg-accent/5 transition-all duration-300 font-mono text-sm rounded-lg backdrop-blur-sm"
                >
                  github
                </a>
              </div>
            </div>

            {/* Right: Discord Status Widget */}
            <div className="md:sticky md:top-24">
              <div className="group relative">
                {/* Glow background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-accent/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Card */}
                <div className="relative border border-accent/30 p-8 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-2xl hover:border-accent/60 transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      {discordStatus?.avatar && (
                        <img
                          src={discordStatus.avatar}
                          alt={discordStatus.username}
                          className="w-14 h-14 rounded-full border border-accent/50 ring-2 ring-accent/10 object-cover"
                        />
                      )}
                      <div>
                        <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                          discord status
                        </p>
                        <p className="text-display font-bold text-lg">
                          {loading ? "loading..." : discordStatus?.username || "offline"}
                        </p>
                      </div>
                    </div>

                    {/* Status indicator */}
                    <div className="flex items-center gap-3 pt-2">
                      <div
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{
                          backgroundColor:
                            statusColor[discordStatus?.status || "offline"],
                          boxShadow: `0 0 12px ${
                            statusColor[discordStatus?.status || "offline"]
                          }`,
                        }}
                      />
                      <span className="text-sm text-muted-foreground capitalize font-mono">
                        {discordStatus?.status || "offline"}
                      </span>
                    </div>

                    {/* Activity */}
                    {discordStatus?.activity && (
                      <div className="pt-4 border-t border-border/30">
                        <p className="text-xs text-muted-foreground mb-2 font-mono uppercase tracking-wider">
                          current activity
                        </p>
                        <p className="text-sm text-foreground">
                          {discordStatus.activity}
                        </p>
                      </div>
                    )}

                    {/* Last updated */}
                    <p className="text-xs text-muted-foreground pt-2 font-mono">
                      ↻ updates every 30s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section id="links" className="container py-24 border-t border-border/30">
          <div className="mb-16">
            <h3 className="text-display text-4xl font-bold mb-3">
              connect with me
            </h3>
            <p className="text-muted-foreground text-lg">
              find me across the web
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                  
                  {/* Card */}
                  <div className="relative border border-accent/20 p-6 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-xl hover:border-accent/50 transition-all duration-300 group-hover:bg-card/70">
                    <div className="flex items-start justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                            <Icon className="w-5 h-5 text-accent" />
                          </div>
                          <h4 className="text-display font-bold text-lg group-hover:text-accent transition-colors">
                            {link.name}
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1 duration-300" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="container py-24 border-t border-border/30">
          <div className="mb-16">
            <h3 className="text-display text-4xl font-bold mb-3">
              featured projects
            </h3>
            <p className="text-muted-foreground text-lg">
              a selection of recent work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Baguette Click",
                description: "Interactive web experience",
                link: "/Baguette_Click",
              },
              {
                title: "Croissant Click",
                description: "Audio-visual project",
                link: "/Croissant_Click",
              },
              {
                title: "Portfolio",
                description: "Professional showcase",
                link: "/english-portfolio",
              },
            ].map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group relative overflow-hidden"
              >
                {/* Glow background */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
                
                {/* Card */}
                <div className="relative border border-accent/20 p-6 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm rounded-xl hover:border-accent/50 transition-all duration-300 group-hover:bg-card/70">
                  <div className="space-y-4">
                    <h4 className="text-display font-bold text-lg group-hover:text-accent transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent text-sm pt-2 group-hover:gap-3 transition-all">
                      <span>view</span>
                      <ExternalLink className="w-3 h-3 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/30 mt-24">
          <div className="container py-12">
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <p>© 2026 kunj. all rights reserved.</p>
              <p className="text-xs">
                designed with <span className="text-accent">intention</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
