"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Award,
  Download,
  FileText,
  Gauge,
  Play,
  Ruler,
  Trophy,
} from "lucide-react";
import { profile } from "@/data/profile";

const reveal = {
  initial: { opacity: 1, y: 0 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0 },
};

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

function SectionTitle({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <motion.div {...reveal} className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  );
}

function PlacementBadge({ place, children }: { place: 1 | 2 | 3; children: React.ReactNode }) {
  const labels = { 1: "Gold placement", 2: "Silver placement", 3: "Bronze placement" } as const;
  return (
    <span className={`placement-badge placement-${place}`}>
      <span className="placement-medal" aria-label={labels[place]}>{place}<sup>{place === 1 ? "st" : place === 2 ? "nd" : "rd"}</sup></span>
      <span>{children}</span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="wordmark" href="#home" aria-label="Zalan Kocsis home">
          ZK<span>27</span>
        </a>
        <nav aria-label="Primary navigation">
          {profile.navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="nav-cta" href={assetPath(profile.resumeUrl)} download="Zalan-Kocsis-Recruiting-Resume.pdf"><Download size={15} /> Résumé</a>
      </header>

      <section id="home" className="hero">
        <div className="hero-lines" aria-hidden="true" />
        <div className="hero-copy">
          <div className="status"><span /> Available for 2027 university recruitment</div>
          <p className="hero-kicker">Hungary U18 National Team · Club Beisbol Softbol Barcelona · 4× Catalunya national team</p>
          <h1>Zalan Kocsis</h1>
          <p className="hero-role">Catcher <b>•</b> First Baseman <b>•</b> R/R</p>
          <p className="hero-intro">194 cm catcher and first baseman representing Hungary U18 and Club Beisbol Softbol Barcelona. IB Diploma student intending to study mechanical engineering.</p>
          <div className="hero-actions">
            <a className="button primary" href="#videos"><Play size={17} fill="currentColor" /> Watch highlights</a>
            <a className="button secondary" href="#baseball">View profile <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="photo-frame">
          <div className="action-shot batting-shot">
            <Image src={assetPath("/images/zalan-batting.jpg")} alt="Zalan Kocsis batting for Hungary" fill priority sizes="(max-width: 980px) 55vw, 24vw" />
            <span>Batting</span>
          </div>
          <div className="action-shot catching-shot">
            <Image src={assetPath("/images/zalan-catching.jpg")} alt="Zalan Kocsis throwing from behind the plate" fill priority sizes="(max-width: 980px) 45vw, 20vw" />
            <span>Catcher</span>
          </div>
          <div className="action-shot first-base-shot">
            <Image src={assetPath("/images/zalan-first-base.jpg")} alt="Zalan Kocsis applying a tag at first base" fill priority sizes="(max-width: 980px) 45vw, 20vw" />
            <span>First base</span>
          </div>
        </div>
        <div className="hero-stats">
          <div><strong>6′4″</strong><span>Height</span></div>
          <div><strong>181</strong><span>Weight / lb</span></div>
          <div><strong>2027</strong><span>Graduation</span></div>
        </div>
      </section>

      <section id="videos" className="section dark-section video-section">
        <SectionTitle eyebrow="Video" title="Batting clips" copy="Three separate batting clips for a quick look at my swing." />
        <motion.div {...reveal} className="video-stage">
          {["Batting clip 1", "Batting clip 2", "Batting clip 3"].map((label, index) => (
            <div className="video-placeholder" key={label}>
              <span className="clip-number">0{index + 1}</span>
              {index < 3 ? (
                <div className="clip-with-caption">
                  <video
                    className="batting-video"
                    controls
                    playsInline
                    preload="metadata"
                    poster={assetPath(`/images/video-posters/batting-clip-${index + 1}.jpg`)}
                    aria-label={label}
                    onLoadedMetadata={(event) => {
                      // Clip 3 has a loud commentator; start it 30% below the previous 0.35 default.
                      if (index === 2) event.currentTarget.volume = 0.245;
                    }}
                  >
                    <source src={assetPath(`/videos/batting-clip-${index + 1}.mp4`)} type="video/mp4" />
                    Your browser does not support this video.
                  </video>
                  {index === 0 && (
                    <p className="clip-description">Final inning, runner on second, one out. An inside-the-park home run turned a 4–5 deficit into a 6–5 lead, turning the game around and helping us win.</p>
                  )}
                  {index === 1 && (
                    <p className="clip-description">Runner on second. RBI double to drive the runner home against Poland at the U-18 European Championship.</p>
                  )}
                  {index === 2 && (
                    <p className="clip-description">First inning, runner on second. RBI triple against Dridma (Madrid), bringing home the first run against one of the strongest teams at the 2026 Spanish U18 Baseball Championship.</p>
                  )}
                </div>
              ) : (
                <>
                  <div className="play-ring"><Play size={24} fill="currentColor" /></div>
                  <p>{label}</p>
                  <span className="clip-note">Video coming soon</span>
                </>
              )}
            </div>
          ))}
        </motion.div>
        <div className="video-meta"><span>2026 season</span><span>Three batting clips</span></div>

        <div className="catching-heading">
          <h2>Catcher action clips</h2>
          <p>Five position-specific clips showing throwing, receiving and blocking.</p>
        </div>
        <motion.div {...reveal} className="video-stage catcher-stage">
          {["Throw to second", "Throw to third", "Bounce recovery"].map((action, index) => (
            <div className="video-placeholder" key={action}>
              <span className="clip-number">0{index + 1}</span>
              {index < 3 ? (
                <div className="clip-with-caption">
                  <video
                    className="batting-video"
                    controls
                    playsInline
                    preload="metadata"
                    poster={assetPath(`/images/video-posters/catching-clip-${index + 1}.jpg`)}
                    aria-label={`Catching clip ${index + 1} — ${action}`}
                  >
                    <source src={assetPath(`/videos/catching-clip-${index + 1}.mp4`)} type="video/mp4" />
                    Your browser does not support this video.
                  </video>
                  {index === 0 && (
                    <p className="clip-description">Throwing out a runner at second against Dridma (Madrid) with a 1.983-second pop time during the 2026 Spanish U18 Baseball Championship.</p>
                  )}
                  {index === 1 && (
                    <p className="clip-description">Throwing out a runner at third after recovering the ball near the dugout against France during the U-18 European Championship.</p>
                  )}
                  {index === 2 && (
                    <p className="clip-description">Recovering a bounced pitch and throwing out the runner at second for the final out of the inning during the U-18 European Championship.</p>
                  )}
                </div>
              ) : (
                <>
                  <div className="play-ring"><Play size={24} fill="currentColor" /></div>
                  <p>Catching clip {index + 1}</p>
                  <span className="clip-note">{action} video coming soon</span>
                </>
              )}
            </div>
          ))}
        </motion.div>
        <motion.div {...reveal} className="catcher-skill-row">
          <article className="catcher-skill-clip">
            <div className="skill-clip-heading"><span>04</span><strong>Receiving</strong><small>9.2 sec</small></div>
            <video controls playsInline preload="metadata" poster={assetPath("/images/video-posters/catching-receiving.jpg")} aria-label="Catcher receiving clip">
              <source src={assetPath("/videos/catching-receiving.mp4")} type="video/mp4" />
              Your browser does not support this video.
            </video>
          </article>
          <article className="catcher-skill-clip">
            <div className="skill-clip-heading"><span>05</span><strong>Blocking and fielding</strong><small>14.5 sec</small></div>
            <video controls playsInline preload="metadata" poster={assetPath("/images/video-posters/catching-blocking.jpg")} aria-label="Catcher blocking clip">
              <source src={assetPath("/videos/catching-blocking.mp4")} type="video/mp4" />
              Your browser does not support this video.
            </video>
          </article>
        </motion.div>
      </section>

      <section id="baseball" className="section light-section">
        <SectionTitle eyebrow="Baseball" title="Player profile and verified statistics" copy="Official season results, measurements and playing history." />
        <div className="profile-grid">
          <motion.div {...reveal} className="bio-card">
            <Trophy size={24} />
            <h3>Player snapshot</h3>
            {profile.playerDetails.map(([label, value]) => <div className="data-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </motion.div>
          <motion.div {...reveal} className="wbsc-card">
            <div className="card-top"><div><p className="tournament-level">Hungary U18 National Team · European Championship</p><h3>2026 U-18 Baseball European Championship — Italy</h3></div><Award size={32} /></div>
            <p className="tournament-intro"><strong>Represented Hungary on the European Championship stage</strong> in Italy, wearing jersey #20. The results below are official WBSC Europe tournament statistics.</p>
            <div className="stat-grid">
              {profile.wbscStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
            <a href={profile.wbscUrl} target="_blank" rel="noreferrer">Official WBSC Europe player profile and full statistics <ArrowUpRight size={18} /></a>
          </motion.div>
        </div>
        <motion.div {...reveal} className="metrics">
          {profile.metrics.map((metric, i) => {
            const Icon = [Gauge, Ruler, Trophy, Award][i];
            return <div key={metric.label}><Icon size={21} /><span>{metric.label}</span><strong>{metric.value}</strong></div>;
          })}
        </motion.div>
        <motion.article {...reveal} className="season-card">
          <div className="season-copy">
            <p className="eyebrow">Official FCBS season statistics</p>
            <h3>{profile.fcbsSeason.title}</h3>
            <div className="season-rankings">
              {profile.fcbsSeason.rankings.map((ranking) => {
                const place = ranking.startsWith("Tied 2nd") ? 2 : ranking.startsWith("3rd") ? 3 : 1;
                return <PlacementBadge key={ranking} place={place}>{ranking}</PlacementBadge>;
              })}
            </div>
            <p>{profile.fcbsSeason.summary}</p>
            <a href={profile.fcbsSeason.url} target="_blank" rel="noreferrer">
              View official FCBS U19 statistics <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="season-stats">
            {profile.fcbsSeason.stats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
          <div className="fielding-copy">
            <p className="eyebrow">Official FCBS fielding statistics</p>
            <div className="season-rankings fielding-rankings">
              {profile.fcbsSeason.fieldingRankings.map((ranking) => (
                <PlacementBadge key={ranking} place={1}>{ranking}</PlacementBadge>
              ))}
            </div>
            <p>{profile.fcbsSeason.fieldingSummary}</p>
          </div>
          <div className="season-stats fielding-stats">
            {profile.fcbsSeason.fieldingStats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </motion.article>
        <motion.article {...reveal} className="season-card division-season-card">
          <div className="season-copy">
            <p className="eyebrow">Official FCBS Division 2 statistics</p>
            <h3>{profile.divisionTwoSeason.title}</h3>
            <p>{profile.divisionTwoSeason.summary}</p>
            <a href={profile.divisionTwoSeason.url} target="_blank" rel="noreferrer">
              View official FCBS Division 2 statistics <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="season-stats">
            {profile.divisionTwoSeason.stats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
          <div className="fielding-copy">
            <p className="eyebrow">Official FCBS Division 2 fielding statistics</p>
            <PlacementBadge place={1}>{profile.divisionTwoSeason.fieldingAchievement}</PlacementBadge>
          </div>
          <div className="season-stats fielding-stats">
            {profile.divisionTwoSeason.fieldingStats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </motion.article>
        <motion.article {...reveal} className="season-card division-season-card">
          <div className="season-copy">
            <p className="eyebrow">Official 2025 FCBS cup statistics</p>
            <h3>{profile.copaCatalunyaSeason.title}</h3>
            <p>{profile.copaCatalunyaSeason.summary}</p>
            <div className="season-rankings">
              {profile.copaCatalunyaSeason.rankings.map((ranking) => {
                const place = ranking.startsWith("2nd") ? 2 : ranking.startsWith("3rd") ? 3 : 1;
                return <PlacementBadge key={ranking} place={place}>{ranking}</PlacementBadge>;
              })}
            </div>
            <a href={profile.copaCatalunyaSeason.url} target="_blank" rel="noreferrer">
              View official FCBS Copa Catalunya statistics <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="season-stats">
            {profile.copaCatalunyaSeason.stats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
          <div className="fielding-copy">
            <p className="eyebrow">Official 2025 FCBS fielding statistics</p>
            <PlacementBadge place={1}>{profile.copaCatalunyaSeason.fieldingAchievement}</PlacementBadge>
            <p>{profile.copaCatalunyaSeason.fieldingSummary}</p>
          </div>
          <div className="season-stats fielding-stats">
            {profile.copaCatalunyaSeason.fieldingStats.map(([value, label]) => (
              <div key={label}><strong>{value}</strong><span>{label}</span></div>
            ))}
          </div>
        </motion.article>
        <motion.article {...reveal} className="selection-band">
          <div className="selection-mark">
            <strong>{profile.catalanSelections.count}<sup>×</sup></strong>
            <span>{profile.catalanSelections.title}</span>
            <small>{profile.catalanSelections.span}</small>
          </div>
          <div className="selection-body">
            <p className="eyebrow">Federació Catalana de Beisbol i Softbol selections</p>
            <p className="selection-note">{profile.catalanSelections.note}</p>
            <ol className="selection-list">
              {profile.catalanSelections.callUps.map((callUp) => (
                <li key={callUp.circular}>
                  <time>{callUp.year}</time>
                  <div>
                    <strong>{callUp.squad}</strong>
                    <span>{callUp.event} · {callUp.detail}</span>
                  </div>
                  <a href={callUp.url} target="_blank" rel="noreferrer">
                    <FileText size={15} /> Official circular {callUp.circular} <ArrowUpRight size={15} />
                  </a>
                </li>
              ))}
            </ol>
            <p className="selection-scope">{profile.catalanSelections.scope}</p>
          </div>
        </motion.article>
        <motion.div {...reveal} className="baseball-timeline">
          <p className="timeline-label">Baseball journey</p>
          <div className="baseball-timeline-track">
            {profile.baseballTimeline.map((item) => (
              <article key={`${item.period}-${item.title}`}>
                <time>{item.period}</time>
                <span className="timeline-dot" />
                <div>
                  <h3><a href={item.url} target="_blank" rel="noreferrer">{item.title} <ArrowUpRight size={15} /></a></h3>
                  <p>{item.description}</p>
                  <div className="timeline-photo">
                    <Image src={assetPath(item.image)} alt={item.imageAlt} fill sizes="(max-width: 640px) 78vw, 27vw" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="academics" className="section split-section">
        <SectionTitle eyebrow="Academics" title="Academic profile" copy="IB Diploma studies and preparation for university engineering." />
        <div className="academic-layout">
          <div>
            <motion.div {...reveal} className="academic-list">
              {profile.schools.map((school) => (
                <div key={school.name}>
                  <span>{school.status}</span>
                  <strong>
                    <a className="academic-link" href={school.url} target="_blank" rel="noreferrer">
                      {school.name} <ArrowUpRight size={14} />
                    </a>
                    <small>{school.period}</small>
                  </strong>
                </div>
              ))}
              <div><span>Programme</span><strong>IB Diploma</strong></div>
              <div><span>Intended major</span><strong>Mechanical Engineering</strong></div>
            </motion.div>
            <motion.div {...reveal} className="academic-timeline">
              <p className="timeline-label">Academic journey • 2022–2026</p>
              {profile.academicTimeline.map((item) => (
                <article key={item.year}>
                  <time>{item.year}</time>
                  <div><h3>{item.title}</h3><p>{item.description}</p></div>
                </article>
              ))}
            </motion.div>
          </div>
          <motion.div {...reveal} className="quote-card"><h3>University goals</h3><p>I am looking for a university where I can contribute to a competitive baseball program and study mechanical engineering.</p></motion.div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <motion.div {...reveal}>
          <p className="eyebrow">Recruiting contact</p>
          <h2>Contact information shared privately</h2>
          <p>For privacy, personal phone numbers, email addresses and direct coach contacts are not published on this website. University coaches receive complete contact details in the private recruiting résumé sent directly by email.</p>
          <figure className="coaches-photo">
            <div className="coaches-photo-frame">
              <Image src={assetPath("/images/zalan-with-coaches.jpg")} alt="With my Club Beisbol Softbol Barcelona coaches" fill sizes="(max-width: 980px) 90vw, 920px" />
            </div>
            <figcaption><strong>My coaching staff</strong><span>With my Club Beisbol Softbol Barcelona coaches.</span></figcaption>
          </figure>
          <div className="contact-grid">
            <article className="contact-card">
              <span>Player</span>
              <h3>Zalan Kocsis</h3>
              <div className="public-contact-links">
                <a className="public-email" href={`mailto:${profile.publicEmail}`}>{profile.publicEmail}</a>
                <a className="public-instagram" href={profile.instagramUrl} target="_blank" rel="noreferrer">Instagram · {profile.instagramHandle}</a>
              </div>
            </article>
            {profile.coachContacts.map((contact) => (
              <article className="contact-card" key={contact.name}>
                <span>Coach</span>
                <h3>{contact.name}</h3>
                <p><strong>{contact.role}</strong><br />Club Beisbol Softbol Barcelona<br />Contact details available in the private recruiting résumé.<br /><a href={`mailto:${profile.publicEmail}`}>Request it at {profile.publicEmail}</a></p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <footer><strong>ZALAN KOCSIS</strong><span>Class of 2027 • Catcher / First Baseman • Hungary / Barcelona</span><a href="#home">Back to top ↑</a></footer>
    </main>
  );
}
