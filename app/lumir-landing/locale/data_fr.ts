import {
    Clock,
    Globe,
    ShieldCheck
  } from "lucide-react";

export const DATA_FR = {
    cta: {
      primaryHref: "https://wealthfarming.app/price-list",
      secondaryHref: "https://wealthfarming.app/price-list",
    },
    hero: {
      kicker: "ACHETER",
      title: "Pioneer NFT | Market Wizard Collection",
      subtitle: "Pioneer NFT — pas seulement de l’art, mais du pouvoir entre vos mains",
      badges: ["Édition limitée", "Accès exclusif", "Utilité réelle"],
      blurb: "Devenez l’un des premiers Pioneers à façonner l’avenir du behavioral trading avec BeQ Ops LUMIR.",
      primary: "Acheter le NFT maintenant",
      secondary: "En savoir plus",
    },
    sections: {
      story: {
        title: "🔮 Market Wizard Collection — L’héritage des légendes du trading",
        parts: [
          "Dans la finance, un classique s’impose à tout trader sérieux : ‘Market Wizards’ de Jack D. Schwager.",
          "Il relate les histoires de légendes — Paul Tudor Jones, Ed Seykota, Bruce Kovner… — qui ont conquis les marchés grâce à l’état d’esprit, la discipline et une maîtrise émotionnelle hors pair.",
          "La collection NFT Market Wizard est née de cette inspiration. Si ‘Market Wizards’ est l’héritage du passé, le Market Wizard NFT est l’insigne pionnier d’une nouvelle génération — celle qui entraîne son comportement, forge son Trader DNA et devient légende à l’ère numérique.",
          "Avec Pioneer NFT, vous ne possédez pas seulement un actif numérique — vous tenez la position pour écrire un nouveau chapitre des Market Wizards à l’ère blockchain.",
        ],
      },
      heroCard: {
        intro: "Le seul NFT qui offre à la fois une utilité réelle et une protection transparente du capital.",
        items: [
          "Protection minimale de 90 % après 90 jours (conditions).",
          "Accès Équipe pour 10 membres — 13W Challenge.",
          "Coaching IA 24/7 & Trader Behavioral Index.",
        ],
      },
      compare: {
        title: "⚖️ Trader ordinaire vs. Market Wizard",
        left: "Trader ordinaire",
        right: "Market Wizard",
        rows: [
          ["Trade selon l’émotion, sujet au FOMO/FUD", "Discipline d’acier, suit toujours le système"],
          ["Focalisé P/L court terme, abandon facile", "Mesure le comportement, optimise le long terme"],
          ["Manque de plan, compte sur la chance", "Stratégie, méthode, feuille de route comportementale (Trader DNA)"],
          ["Se bat seul, s’épuise", "Coach IA 24/7 + soutien de la communauté"],
          ["Faible survie, comptes brûlés", "Bâtit un héritage durable"],
        ],
      },
      compareAlert: {
        desc: "Votre billet pour passer d’un « trader ordinaire » au standard Market Wizard.",
      },
      problem: {
        title: "⚡ Problème & Solution",
        bullets: [
          "→ 90 % des traders échouent. Non par manque de connaissance, mais par déficit de discipline et de gestion comportementale.",
          "BeQ Ops LUMIR — première plateforme mondiale d’entraînement comportemental: Coach IA 24/7, Trader Behavioral Index (TBI), 13W Challenge & Elite Roadmap.",
          "Pioneer NFT est le passe qui déverrouille cet écosystème avec des privilèges exclusifs.",
        ],
      },
      benefits: {
        title: "🎁 Avantages à détenir le Pioneer NFT",
        pro: {
          title: "🎟 50 licences SaaS Pro",
          value: "Valeur : 12 450 $",
          intro: "50 mois de plateforme LUMIR — une suite complète d’outils comportementaux.",
          items: [
            "🧬 Trader DNA Map — 12 métriques comportementales clés",
            "📈 Rapport mensuel + 2 analyses approfondies",
            "🤖 Coaching IA 24/7 — Protocoles de croissance, Notes, Planner quotidien, KPI",
            "⏰ Timing Alignment Index (TAI) — identifier les ‘heures d’or’ du trading",
            "🛡 Outils de gestion du risque & capital",
            "🎯 13W Challenge + accès Mastery Room",
            "📊 Alertes de comportement de marché",
          ],
        },
        premium: {
          title: "🎟 10 licences SaaS Premium",
          value: "Valeur : 4 990 $",
          intro: "10 mois d’outils exclusifs haut de gamme pour traders élites.",
          items: [
            "🧬 Trader DNA Advanced — 21+ métriques avancées",
            "🏛 Accès Elite Room",
            "🚨 Stoploss Heatmap, Pièges de liquidité, Écarts de pattern",
            "🛡 Behavioral Protection System™ : Burnout Detector, Emotional Lock Mode™, Bias Exposure",
            "🔥 Alerte Risk Drift & Dead Zone",
            "📊 Revue trimestrielle + coaching avancé",
          ],
        },
        team: {
          title: "👥 Accès Équipe (10 places)",
          items: [
            "Convertir 50 Pro + 10 Premium en opportunités pour 10 membres de rejoindre ensemble le 13W Challenge.",
            "Activer le mode équipe — performance et taux d’achèvement supérieurs.",
            "Priorité DAO/communauté, nomination Matching Capital, statut Founding Trader Team.",
            "Allouer Premium au ‘lead’ + Pro aux membres — bâtir une colonne vertébrale stratégique.",
          ],
        },
        intangible: {
          title: "🌟 Bénéfices immatériels",
          items: [
            "🏅 Insigne fondateur — titre ‘Pioneer’",
            "🌍 Réseau d’élite mondial",
            "🏛 Influence & voix dans la roadmap — Pioneer Council",
            "📈 Avantage du premier arrivé",
            "🔑 Branding personnel & communautaire",
            "🚀 Positionnement legacy — Détenteurs Genesis",
          ],
        },
      },
      loyalty: {
        title: "💎 Loyalty Rewards",
        items: [
          "🔗 On-chain & transparent via smart contract",
          "📊 Basées sur la performance — liées à l’écosystème",
          "🎁 Avantages flexibles — tokens, crédits, upgrades exclusifs",
          "🌱 Signal d’engagement long terme — pas de rendement fixe",
        ],
      },
      valueSim: {
        title: "📊 Simulation de valeur — Pioneer NFT",
        scenarios: [
          {
            title: "1) Loyalty Reward Pool (hypothétique)",
            lines: [
              "Reward Pool pouvant atteindre ~756K USD/an (simulation).",
              "Hypothèse : 30 Pioneer NFTs (et 30 Titan 50 000 USDC).",
              "Moyenne ~2 270 USD/an/NFT (sans engagement).",
            ],
          },
          {
            title: "2) Valeur directe des licences SaaS",
            highlight: "Conversion totale ~17 440 USD",
            lines: [
              "50 Pro × 249 $ = 12 450 $",
              "10 Premium × 499 $ = 4 990 $",
            ],
          },
          {
            title: "3) Challenge & Incitations",
            lines: [
              "Équipe de 10 — 13W Challenge.",
              "Scénario : +1 000–3 000 $ via crédits/tokens.",
              "Objectif 13W (illustration) : 10 000 → ~18 856 USD (5 %/semaine).",
            ],
          },
        ],
      },
      pricingCompare: {
        title: "📊 Comparatif de valeur — Pro vs Premium vs Pioneer NFT",
        header: [
          "Avantages",
          "Abonnement Pro (249 $/mois)",
          "Abonnement Premium (499 $/mois)",
          "Pioneer NFT (Unique, Limité)",
        ],
        rows: [
          ["Trader DNA Map", "12 métriques clés", "21+ métriques avancées", "Accès complet Pro + Premium (50 + 10 licences)"],
          ["Coaching IA 24/7", "Notes, KPI, Growth Protocol", "Avancé + coaching approfondi", "Tout Pro + Premium pour vous & communauté"],
          ["Alertes comportement de marché", "Reaction Tracker, Market Zones", "Stoploss Heatmap, Pièges de liquidité, Bias Exposure", "Tout Pro + Premium"],
          ["Behavioral Protection System™", "❌", "✔️ Emotional Lock Mode™, Burnout Detector", "✔️ (via licences Premium)"],
          ["Accès 13W Challenge", "Solo / Mastery Room", "Elite Challenge & Revue trimestrielle", "👥 Accès Équipe (10) + leadership"],
          ["Accès communauté", "Trader Room", "Elite Room", "Pioneer Council Membership"],
          ["Reconnaissance", "❌", "❌", "🏅 Insigne fondateur"],
          ["Loyalty Rewards", "❌", "❌", "💎 Basées sur la performance (non fixes)"],
          ["Valeur convertie totale", "~3 000 $/an", "~6 000 $/an", "~17 440 $ + pouvoir stratégique + NFT échangeable"],
        ],
      },
      growthSim: {
        title: "📊 Illustration (5 %/semaine — compte 10 000 $)",
        points: [
          "Semaine 1 : 10 000 → 10 500",
          "Semaine 5 : ~12 763",
          "Semaine 10 : ~16 285",
          "Semaine 13 : ~18 856",
        ],
        noticeTitle: "Remarque",
        note: "Pas de garantie de rendement — illustre la discipline & le bon comportement (13W Challenge).",
      },
      valueProtection: {
        title: "🛡 Politique de Protection de Valeur — Pioneer NFT",
        blocks: [
          { icon: Clock, title: "90 premiers jours — Expérience complète", text: "Pendant 90 jours, utilisez les licences, rejoignez le Council, recevez les Loyalty Rewards & entrez dans le 13W Challenge." },
          { icon: ShieldCheck, title: "Droit de rachat — Après 90 jours", text: "Du jour 91 à 120, rachetez le NFT auprès de LUMIR et recevez au minimum 90 % du prix de mint (on-chain, transparent)." },
          { icon: Globe, title: "Portée", text: "Sécurité pour les détenteurs, équité pour l’écosystème, engagement long terme de LUMIR." },
        ],
        alert: {
          title: "Transparence",
          desc: "Le processus de rachat est on-chain, sans frais cachés, garantissant l’équité.",
        },
      },
      headlineCTA: {
        kicker: "ACHETER",
        title: "Le seul NFT qui offre utilité réelle et protection transparente du capital.",
        or: "Ou",
        subtitle: "Pioneer NFT : Porte d’entrée pour devenir Elite Trader — 90 % protégés après 90 jours",
        cta: "ACHETER",
      },
      audience: {
        title: "👤 Qui devrait acheter le Pioneer NFT ?",
        items: [
          "Traders individuels — win rate, discipline, mindset",
          "Leaders/IB — construire & entraîner des équipes",
          "Investisseurs/Blockchain — rareté, utilité réelle, échangeable",
          "Collectionneurs/Builders — titre Pioneer & position dans LUMIR",
        ],
        foot: "Même sans être trader, c’est un ‘equity électronique’ — rachetable, transférable, avec positionnement long terme.",
      },
      urgency: {
        title: "⏳ Pourquoi agir maintenant ?",
        items: [
          "🔥 Émission unique — seulement au premier lot",
          "⚡ Offre limitée — une fois épuisée, c’est fini",
          "🚀 Early users = early power — Pioneer Council a une voix stratégique",
        ],
        cta: "Acheter maintenant 🚀",
      },
      process: {
        title: "🔐 Processus transparent",
        steps: [
          "Connecter le wallet — MetaMask ou WalletConnect",
          "Acheter le NFT — cliquer 'Acheter maintenant' et confirmer",
          "Activer l’utilité — activer la licence sur www.lumir.finance",
          "Défi accepté — rejoindre 13W Challenge & Roadmap Elite",
        ],
      },
      trust: {
        title: "🛡 Confiance & Garanties",
        items: [
          "Soutenu par BeQ Holdings Group — investissement & gestion de fiducie",
          "TBI propriétaire — Trader Behavioral Index",
          "Communauté mondiale — VN, Thaïlande, Inde, US, UE",
          "Transparence — Rewards on-chain, aucun rendement fixe promis",
          "Rachat WF 90 jours — minimum 90 % (conditions)",
        ],
      },
      faq: {
        title: "❓ FAQ — Protection de Valeur (Pioneer NFT)",
        items: [
          { q: "Q1. Le Pioneer NFT garantit-il la valeur ?", a: "Oui. Protection de Valeur — rachat après 90 jours à ≥ 90 % du prix initial." },
          { q: "Q2. Pourquoi attendre 90 jours ?", a: "90 jours pour profiter des avantages et permettre à LUMIR de faire fonctionner le capital et les pools de récompenses." },
          { q: "Q3. Si certains avantages ont été utilisés ?", a: "Oui. Après 90 jours vous recevez toujours 90 % ; l’usage typique <10 % de la valeur totale." },
          { q: "Q4. Que reçoit-on au rachat ?", a: "Stablecoins (USDT/USDC) via smart contract ou portail officiel WealthFarming." },
          { q: "Q5. Et après 180 jours ?", a: "Pas de remboursement garanti ; conservez le NFT pour Loyalty/utilité ou vendez/transférez sur marketplace." },
          { q: "Q6. Garantie de rendement ?", a: "Non. Les Loyalty Rewards dépendent de la performance (non fixes). Protection assure seulement ≥90 % après 90 jours." },
        ],
      },
      footerCta: {
        text:
          "<strong>Pioneer NFT</strong> n’est pas seulement un NFT — c’est la clé du statut, de l’influence et du parcours pour devenir Elite Trader.",
        button: "Acheter sur Wealthfarming.app",
      },
    },
  };