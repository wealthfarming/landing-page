"use client";

import {
  Badge,
} from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import {
  Activity,
  BarChart3,
  Brain,
  Check,
  Clock,
  Coins,
  Crown,
  Globe,
  HandCoins,
  Lock,
  Minus,
  Rocket,
  ShieldCheck,
  Target,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import HeaderDesktopFull from "@/components/header/header-desktop";
import FooterFull from "@/components/footer/footer-full";
import VideoBox from "@/components/footer/video_box";
import { useInterface } from "@/components/context/interface-context";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import indexBanner from "../../public/images/nec_nft/nec_bg.jpg";

/**
 * Pioneer NFT Landing – Vietnamese
 * Frameworks: Next.js (App Router), shadcn/ui, TailwindCSS
 * Notes:
 * - All text content is inside DATA so you can localize later.
 * - Replace href values with your final URLs.
 */

const DATA_VI = {
  cta: {
    primaryHref: "https://wealthfarming.app/price-list",
    secondaryHref: "https://wealthfarming.app",
  },
  hero: {
    kicker: "BUY NOW",
    title:
      "Pioneer NFT | Market Wizard Collection",
    subtitle:
      "“Pioneer NFT – Không chỉ là nghệ thuật, mà là quyền lực trong tay bạn”",
    badges: ["Số lượng giới hạn", "Quyền truy cập độc quyền", "Tiện ích thực"],
    blurb:
      "Trở thành một trong những Pioneers đầu tiên định hình tương lai behavioral trading cùng BeQ Ops LUMIR.",
    primary: "Mua NFT Ngay",
    secondary: "Tìm hiểu thêm",
  },
  sections: {
    story: {
      title: "🔮 Market Wizard Collection – Di sản từ những Huyền thoại Trading",
      parts: [
        "Trong thế giới tài chính, có một cuốn sách kinh điển mà mọi trader nghiêm túc đều biết: ‘Market Wizards’ của Jack D. Schwager.",
        "Đó là những câu chuyện về các trader huyền thoại – Paul Tudor Jones, Ed Seykota, Bruce Kovner… – những con người đã chinh phục thị trường bằng tư duy, kỷ luật, và khả năng quản trị cảm xúc phi thường.",
        "Bộ sưu tập Market Wizard Collection NFT ra đời từ cảm hứng đó. Nếu ‘Market Wizards’ là di sản tri thức của thế hệ trader huyền thoại, thì Market Wizard NFT chính là chứng chỉ tiên phong cho thế hệ trader mới – những người muốn bước vào hành trình huấn luyện hành vi, xây dựng Trader DNA, và trở thành huyền thoại trong kỷ nguyên kỹ thuật số.",
        "Với Pioneer NFT, bạn không chỉ sở hữu một tài sản số, mà còn nắm giữ vị thế để viết tiếp chương mới của Market Wizards trong thời đại blockchain.",
      ],
    },
    compare: {
      title: "⚖️ Trader Bình Thường vs. Market Wizard",
      left: "Trader Bình Thường",
      right: "Market Wizard",
      rows: [
        ["Giao dịch theo cảm xúc, dễ bị FOMO/FUD", "Kỷ luật thép, luôn tuân thủ hệ thống"],
        ["Đo lường P/L ngắn hạn, dễ bỏ cuộc", "Đo lường hành vi, tối ưu dài hạn"],
        ["Thiếu kế hoạch, phụ thuộc may mắn", "Có chiến lược, phương pháp, bản đồ hành vi (Trader DNA)"],
        ["Tự chiến đấu một mình, dễ nản", "AI Coach 24/7 + cộng đồng hỗ trợ"],
        ["Tỷ lệ sống sót thấp, dễ ‘cháy tài khoản’", "Định hình di sản trading"],
      ],
    },
    problem: {
      title: "⚡ Câu chuyện – Vấn đề & Giải pháp",
      bullets: [
        "→ 90% trader thất bại. Không phải vì thiếu kiến thức, mà do thiếu kỷ luật và quản trị hành vi.",
        "BeQ Ops LUMIR – nền tảng huấn luyện hành vi giao dịch đầu tiên trên thế giới: AI Coach 24/7, Trader Behavioral Index (TBI), 13W Challenge & Elite Roadmap.",
        "Pioneer NFT là tấm vé mở khóa hệ sinh thái này với đặc quyền không thể tìm thấy ở nơi khác.",
      ],
    },
    benefits: {
      title: "🎁 Quyền lợi khi sở hữu Pioneer NFT",
      pro: {
        title: "🎟 50 Pro SaaS Licenses",
        value: "Trị giá: 12.450 USD",
        intro:
          "50 tháng sử dụng nền tảng LUMIR – bộ công cụ huấn luyện hành vi giao dịch toàn diện.",
        items: [
          "🧬 Trader DNA Map – 12 chỉ số hành vi cốt lõi",
          "📈 Báo cáo hành vi hàng tháng + 2 phân tích chuyên sâu",
          "🤖 AI Coaching 24/7 – Growth Protocols, Notes, Daily Planner, KPI",
          "⏰ Timing Alignment Index (TAI) – xác định ‘giờ vàng’ giao dịch",
          "🛡 Risk & Money Management Tools",
          "🎯 13W Challenge + Mastery Room Access",
          "📊 Market Behavior Alerts",
        ],
      },
      premium: {
        title: "🎟 10 Premium SaaS Licenses",
        value: "Trị giá: 4.990 USD",
        intro:
          "10 tháng sử dụng bộ công cụ độc quyền cao cấp dành cho Elite trader.",
        items: [
          "🧬 Trader DNA Advanced – 21+ chỉ số hành vi nâng cao",
          "🏛 Elite Room Access",
          "🚨 Stoploss Heatmap, Liquidity Traps, Pattern Deviation",
          "🛡 Behavioral Protection System™: Burnout Detector, Emotional Lock Mode™, Bias Exposure",
          "🔥 Risk Drift & Dead Zone Alerts",
          "📊 Quarterly Review + Coaching nâng cao",
        ],
      },
      team: {
        title: "👥 Team Access (10 Slots)",
        items: [
          "Quy đổi 50 Pro + 10 Premium thành cơ hội cho 10 thành viên cùng tham gia 13W Challenge.",
          "Kích hoạt 13W Challenge dạng đội nhóm – nâng hiệu suất & tỉ lệ hoàn thành.",
          "Ưu tiên DAO/community, đề cử Matching Capital, danh xưng Founding Trader Team.",
          "Phân bổ Premium cho ‘lead’ + Pro cho thành viên còn lại – tạo xương sống chiến thuật.",
        ],
      },
      intangible: {
        title: "🌟 Quyền lợi Vô hình",
        items: [
          "🏅 Founding Badge – danh hiệu ‘Pioneer’",
          "🌍 Global Elite Network",
          "🏛 Influence & Voice in Roadmap – Pioneer Council",
          "📈 First Mover Advantage",
          "🔑 Personal & Community Branding",
          "🚀 Legacy Positioning – Genesis Holders",
        ],
      },
    },
    loyalty: {
      title: "💎 Loyalty Rewards",
      items: [
        "🔗 On-chain & minh bạch qua smart contract",
        "📊 Performance-based – gắn với hiệu suất hệ sinh thái",
        "🎁 Flexible Benefits – token, credits, hoặc nâng cấp độc quyền",
        "🌱 Long-term Commitment Signal – không phải cam kết lợi nhuận cố định",
      ],
    },
    valueSim: {
      title: "📊 Giả lập Giá trị Quy đổi Pioneer NFT",
      scenarios: [
        {
          title: "1) Loyalty Reward Pool (giả lập)",
          lines: [
            "Reward Pool có thể đạt ~756K USD/năm (giả lập).",
            "Giả sử 30 Pioneer NFT (và 30 Titan 50.000 USDC).",
            "Trung bình ~2.270 USD/năm/NFT (không cam kết).",
          ],
        },
        {
          title: "2) Giá trị trực tiếp của SaaS License",
          highlight: "Tổng quy đổi ~17.440 USD",
          lines: [
            "50 Pro × $249 = $12.450",
            "10 Premium × $499 = $4.990",
          ],
        },
        {
          title: "3) Challenge & Incentive",
          lines: [
            "Team 10 người – 13W Challenge.",
            "Kịch bản: +$1.000–$3.000 bằng credits/token reward.",
            "Mục tiêu 13W (minh hoạ): 10.000 → ~18.856 USD (5%/tuần).",
          ],
        },
      ],
    },
    pricingCompare: {
      title: "📊 So sánh giá trị – Pro vs Premium vs Pioneer NFT",
      header: [
        "Quyền lợi",
        "Pro Subscription ($249/tháng)",
        "Premium Subscription ($499/tháng)",
        "Pioneer NFT (One-time, Limited)",
      ],
      rows: [
        ["Trader DNA Map", "12 chỉ số cốt lõi", "21+ chỉ số nâng cao", "Full access Pro + Premium (50 + 10 licenses)"],
        ["AI Coaching 24/7", "Notes, KPI, Growth Protocol", "Nâng cao + Coaching chuyên sâu", "Bao gồm toàn bộ Pro + Premium cho bạn & cộng đồng"],
        ["Market Behavior Alerts", "Reaction Tracker, Market Zones", "Stoploss Heatmap, Liquidity Traps, Bias Exposure", "Toàn bộ Pro + Premium"],
        ["Behavioral Protection System™", "❌", "✔️ Emotional Lock Mode™, Burnout Detector", "✔️ (qua Premium licenses)"],
        ["13W Challenge Access", "Solo / Mastery Room", "Elite Challenge & Quarterly Review", "👥 Team Access (10 members) + quyền lãnh đạo"],
        ["Community Access", "Trader Room", "Elite Room", "Pioneer Council Membership"],
        ["Recognition", "❌", "❌", "🏅 Founding Badge"],
        ["Loyalty Rewards", "❌", "❌", "💎 Performance-based (non-fixed)"],
        ["Tổng giá trị quy đổi", "~$3.000/năm", "~$6.000/năm", "~$17.440 + quyền lực chiến lược + NFT có thể giao dịch"],
      ],
    },
    growthSim: {
      title: "📊 Minh hoạ giả lập (5%/tuần – tài khoản $10.000)",
      points: [
        "Tuần 1: 10.000 → 10.500",
        "Tuần 5: ~12.763",
        "Tuần 10: ~16.285",
        "Tuần 13: ~18.856",
      ],
      note:
        "Đây không phải cam kết lợi nhuận – chỉ minh hoạ sức mạnh của kỷ luật & hành vi đúng đắn (13W Challenge).",
    },
    valueProtection: {
      title: "🛡 Chính sách Bảo toàn Giá trị – Pioneer NFT",
      blocks: [
        {
          icon: Clock,
          title: "90 Ngày Khởi Đầu – Trải Nghiệm Trọn Vẹn",
          text:
            "Trong 90 ngày đầu bạn toàn quyền sử dụng license, tham gia Council, nhận Loyalty Rewards & 13W Challenge.",
        },
        {
          icon: ShieldCheck,
          title: "Quyền Lợi Quy Đổi – Sau 90 Ngày",
          text:
            "Từ ngày 91–120, có quyền quy đổi NFT lại cho LUMIR để nhận tối thiểu 90% giá trị mint ban đầu (on-chain, minh bạch).",
        },
        {
          icon: Globe,
          title: "Ý Nghĩa",
          text:
            "An toàn cho nhà đầu tư, công bằng cho hệ sinh thái, thể hiện cam kết dài hạn của LUMIR.",
        },
      ],
      alert: {
        title: "Minh bạch",
        desc: "Quy trình quy đổi thực hiện on-chain, không phí ẩn, đảm bảo công bằng.",
      },
    },
    headlineCTA: {
      kicker: "BUY NOW",
      title:
        "NFT duy nhất mang đến cả giá trị sử dụng và cơ chế bảo toàn vốn minh bạch.",
      or: "Hoặc",
      subtitle:
        "Pioneer NFT: Cánh cửa vào hành trình Elite Trader, bảo toàn 90% giá trị sau 90 ngày",
      cta: "BUY NOW",
    },
    audience: {
      title: "👤 Ai nên mua Pioneer NFT?",
      items: [
        "Trader cá nhân – nâng win rate, kỷ luật, mindset",
        "Leader/IB – dùng NFT để xây dựng & huấn luyện đội nhóm",
        "Investor/Blockchain Enthusiast – tài sản khan hiếm, utility thật, giao dịch lại",
        "Collector/Community Builder – danh hiệu Pioneer & vị thế trong hệ sinh thái LUMIR",
      ],
      foot:
        "Ngay cả khi bạn không phải trader, đây vẫn là ‘electronic equity-like’ – có thể quy đổi, chuyển nhượng, và mang lại vị thế lâu dài.",
    },
    urgency: {
      title: "⏳ Tại sao phải hành động ngay?",
      items: [
        "🔥 Phát hành một lần – chỉ trong đợt đầu",
        "⚡ Nguồn cung giới hạn – hết là không còn",
        "🚀 Người dùng sớm = Quyền lực sớm – Pioneer Council có tiếng nói chiến lược",
      ],
    },
    process: {
      title: "🔐 Quy trình minh bạch",
      steps: [
        "Kết nối ví – MetaMask hoặc WalletConnect",
        "Mua NFT – bấm ‘Buy Now’ và xác nhận",
        "Kích hoạt tiện ích – active license trên www.lumir.finance",
        "Challenge Accepted – tham gia 13W Challenge & Elite Roadmap",
      ],
    },
    trust: {
      title: "🛡 Niềm tin & Bảo chứng",
      items: [
        "Backed by BeQ Holdings Group – tập đoàn đầu tư & quản lý quỹ tín thác",
        "Công nghệ độc quyền TBI – Trader Behavioral Index",
        "Cộng đồng toàn cầu – VN, Thái Lan, Ấn Độ, Mỹ, EU",
        "Transparency – Rewards on-chain, không hứa hẹn lợi nhuận cố định",
        "WF Buyback 90 ngày – mua lại tối thiểu 90% (áp dụng điều khoản)",
      ],
    },
    faq: {
      title: "❓ FAQ – Chính sách Bảo toàn Giá trị (Pioneer NFT)",
      items: [
        {
          q: "Q1. Pioneer NFT có chính sách bảo đảm giá trị không?",
          a: "Có. Pioneer NFT kèm cơ chế Value Protection – có quyền quy đổi sau 90 ngày để nhận tối thiểu 90% giá trị mint ban đầu.",
        },
        {
          q: "Q2. Tại sao phải chờ 90 ngày mới có thể quy đổi?",
          a: "90 ngày đầu là giai đoạn trải nghiệm quyền lợi và LUMIR vận hành vốn, bảo đảm tính bền vững cho reward pool.",
        },
        {
          q: "Q3. Đã dùng một phần quyền lợi thì có được hoàn tiền?",
          a: "Có. Sau 90 ngày vẫn có thể quy đổi và nhận 90% giá trị ban đầu; phần khai thác thường <10% tổng giá trị.",
        },
        {
          q: "Q4. Khi quy đổi, tôi nhận lại bằng gì?",
          a: "Stablecoin (USDT/USDC) qua smart contract hoặc cổng quy đổi chính thức của WealthFarming.",
        },
        {
          q: "Q5. Sau 180 ngày mới muốn dừng thì sao?",
          a: "Không còn diện refund, nhưng vẫn được giữ NFT để nhận Loyalty Rewards/tiện ích, hoặc bán/chuyển nhượng trên marketplace.",
        },
        {
          q: "Q6. Chính sách này có cam kết lợi nhuận không?",
          a: "Không. Loyalty Rewards phân phối dựa trên hiệu suất hệ sinh thái (không cố định). Cơ chế bảo toàn chỉ đảm bảo tối thiểu 90% sau 90 ngày.",
        },
      ],
    },
    footerCta: {
      text:
        "<strong>Pioneer NFT</strong> không chỉ là một NFT – đó là chìa khóa mở ra vị thế, quyền lực, và hành trình trở thành Elite Trader.",
      button: "Mua ngay trên Wealthfarming.app",
    },
  },
};

const DATA_EN = {
  cta: {
    primaryHref: "https://wealthfarming.app/price-list",
    secondaryHref: "https://wealthfarming.app",
  },
  hero: {
    kicker: "BUY NOW",
    title: "Pioneer NFT | Market Wizard Collection",
    subtitle: "Pioneer NFT — Not just art, but power in your hands",
    badges: ["Limited Supply", "Exclusive Access", "Real Utility"],
    blurb: "Become one of the first Pioneers shaping the future of behavioral trading with BeQ Ops LUMIR.",
    primary: "Buy NFT Now",
    secondary: "Learn more",
  },
  sections: {
    story: {
      title: "🔮 Market Wizard Collection — Legacy from Trading Legends",
      parts: [
        "In finance, there is a classic every serious trader knows: ‘Market Wizards’ by Jack D. Schwager.",
        "It tells the stories of legends — Paul Tudor Jones, Ed Seykota, Bruce Kovner… — who conquered markets with mindset, discipline, and exceptional emotional control.",
        "The Market Wizard Collection NFT was born from that inspiration. If ‘Market Wizards’ is the legacy of the past, Market Wizard NFT is the pioneer badge for a new generation — those who train behavior, build Trader DNA, and become legends in the digital era.",
        "With Pioneer NFT, you don’t just own a digital asset — you hold the position to write a new chapter of Market Wizards in the blockchain age.",
      ],
    },
    compare: {
      title: "⚖️ Normal Trader vs. Market Wizard",
      left: "Normal Trader",
      right: "Market Wizard",
      rows: [
        ["Trades by emotion, prone to FOMO/FUD", "Steel discipline, always follows the system"],
        ["Short-term P/L focus, quits easily", "Measures behavior, optimizes long-term"],
        ["Lacks plan, relies on luck", "Has strategy, method, behavioral roadmap (Trader DNA)"],
        ["Fights alone, burns out", "24/7 AI Coach + community support"],
        ["Low survival rate, account blow-ups", "Builds a lasting trading legacy"],
      ],
    },
    problem: {
      title: "⚡ Story — Problem & Solution",
      bullets: [
        "→ 90% of traders fail. Not for lack of knowledge, but due to poor discipline and behavior management.",
        "BeQ Ops LUMIR — the world’s first behavioral trading platform: 24/7 AI Coach, Trader Behavioral Index (TBI), 13W Challenge & Elite Roadmap.",
        "Pioneer NFT is your pass to unlock this ecosystem with exclusive privileges.",
      ],
    },
    benefits: {
      title: "🎁 Benefits of owning the Pioneer NFT",
      pro: {
        title: "🎟 50 Pro SaaS Licenses",
        value: "Value: $12,450",
        intro: "50 months of LUMIR platform — a complete behavioral trading toolkit.",
        items: [
          "🧬 Trader DNA Map — 12 core behavioral metrics",
          "📈 Monthly behavior report + 2 deep-dive analyses",
          "🤖 24/7 AI Coaching — Growth Protocols, Notes, Daily Planner, KPI",
          "⏰ Timing Alignment Index (TAI) — identify trading ‘golden hours’",
          "🛡 Risk & Money Management Tools",
          "🎯 13W Challenge + Mastery Room Access",
          "📊 Market Behavior Alerts",
        ],
      },
      premium: {
        title: "🎟 10 Premium SaaS Licenses",
        value: "Value: $4,990",
        intro: "10 months of elite, exclusive toolsets for advanced traders.",
        items: [
          "🧬 Trader DNA Advanced — 21+ advanced behavioral metrics",
          "🏛 Elite Room Access",
          "🚨 Stoploss Heatmap, Liquidity Traps, Pattern Deviation",
          "🛡 Behavioral Protection System™: Burnout Detector, Emotional Lock Mode™, Bias Exposure",
          "🔥 Risk Drift & Dead Zone Alerts",
          "📊 Quarterly Review + advanced coaching",
        ],
      },
      team: {
        title: "👥 Team Access (10 Slots)",
        items: [
          "Convert 50 Pro + 10 Premium into opportunities for 10 members to join the 13W Challenge together.",
          "Activate team-mode 13W Challenge — boost performance and completion rate.",
          "DAO/community priority, Matching Capital nominations, Founding Trader Team recognition.",
          "Allocate Premium to ‘lead’ + Pro to members — build a strategic backbone.",
        ],
      },
      intangible: {
        title: "🌟 Intangible Benefits",
        items: [
          "🏅 Founding Badge — ‘Pioneer’ title",
          "🌍 Global Elite Network",
          "🏛 Influence & Voice in Roadmap — Pioneer Council",
          "📈 First Mover Advantage",
          "🔑 Personal & Community Branding",
          "🚀 Legacy Positioning — Genesis Holders",
        ],
      },
    },
    loyalty: {
      title: "💎 Loyalty Rewards",
      items: [
        "🔗 On-chain & transparent via smart contract",
        "📊 Performance-based — tied to ecosystem performance",
        "🎁 Flexible benefits — tokens, credits, or exclusive upgrades",
        "🌱 Long-term commitment signal — not fixed returns",
      ],
    },
    valueSim: {
      title: "📊 Pioneer NFT Redemption Value Simulation",
      scenarios: [
        {
          title: "1) Loyalty Reward Pool (hypothetical)",
          lines: [
            "Reward Pool may reach ~756K USD/year (simulation).",
            "Assuming 30 Pioneer NFTs (and 30 Titan 50,000 USDC).",
            "Average ~2,270 USD/year/NFT (not a commitment).",
          ],
        },
        {
          title: "2) Direct value of SaaS Licenses",
          highlight: "Total conversion ~17,440 USD",
          lines: [
            "50 Pro × $249 = $12,450",
            "10 Premium × $499 = $4,990",
          ],
        },
        {
          title: "3) Challenge & Incentive",
          lines: [
            "Team of 10 — 13W Challenge.",
            "Scenario: +$1,000–$3,000 by credits/token rewards.",
            "13W goal (illustration): 10,000 → ~18,856 USD (5%/week).",
          ],
        },
      ],
    },
    pricingCompare: {
      title: "📊 Value comparison — Pro vs Premium vs Pioneer NFT",
      header: [
        "Benefits",
        "Pro Subscription ($249/mo)",
        "Premium Subscription ($499/mo)",
        "Pioneer NFT (One-time, Limited)",
      ],
      rows: [
        ["Trader DNA Map", "12 core metrics", "21+ advanced metrics", "Full access Pro + Premium (50 + 10 licenses)"],
        ["24/7 AI Coaching", "Notes, KPI, Growth Protocol", "Advanced + deep coaching", "All Pro + Premium for you & community"],
        ["Market Behavior Alerts", "Reaction Tracker, Market Zones", "Stoploss Heatmap, Liquidity Traps, Bias Exposure", "All Pro + Premium"],
        ["Behavioral Protection System™", "❌", "✔️ Emotional Lock Mode™, Burnout Detector", "✔️ (via Premium licenses)"],
        ["13W Challenge Access", "Solo / Mastery Room", "Elite Challenge & Quarterly Review", "👥 Team Access (10 members) + leadership"],
        ["Community Access", "Trader Room", "Elite Room", "Pioneer Council Membership"],
        ["Recognition", "❌", "❌", "🏅 Founding Badge"],
        ["Loyalty Rewards", "❌", "❌", "💎 Performance-based (non-fixed)"],
        ["Total converted value", "~$3,000/year", "~$6,000/year", "~$17,440 + strategic power + tradable NFT"],
      ],
    },
    growthSim: {
      title: "📊 Illustration (5%/week — $10,000 account)",
      points: [
        "Week 1: 10,000 → 10,500",
        "Week 5: ~12,763",
        "Week 10: ~16,285",
        "Week 13: ~18,856",
      ],
      note: "Not a return guarantee — this illustrates discipline & proper behavior (13W Challenge).",
    },
    valueProtection: {
      title: "🛡 Value Protection Policy — Pioneer NFT",
      blocks: [
        {
          icon: Clock,
          title: "First 90 Days — Full Experience",
          text: "In the first 90 days, use licenses, join the Council, receive Loyalty Rewards & enter the 13W Challenge.",
        },
        {
          icon: ShieldCheck,
          title: "Redemption Right — After 90 Days",
          text: "From day 91–120, you may redeem the NFT back to LUMIR to receive at least 90% of the original mint price (on-chain, transparent).",
        },
        {
          icon: Globe,
          title: "Meaning",
          text: "Safety for holders, fairness for the ecosystem, and LUMIR’s long-term commitment.",
        },
      ],
      alert: {
        title: "Transparency",
        desc: "The redemption process is on-chain, with no hidden fees, ensuring fairness.",
      },
    },
    headlineCTA: {
      kicker: "BUY NOW",
      title: "The only NFT that delivers real utility and transparent capital protection.",
      or: "Or",
      subtitle: "Pioneer NFT: Gateway to the Elite Trader journey, with 90% protection after 90 days",
      cta: "BUY NOW",
    },
    audience: {
      title: "👤 Who should buy Pioneer NFT?",
      items: [
        "Individual traders — improve win rate, discipline, mindset",
        "Leaders/IB — use NFT to build & train teams",
        "Investors/Blockchain Enthusiasts — scarce asset, real utility, tradable",
        "Collectors/Community Builders — Pioneer title & position within LUMIR",
      ],
      foot: "Even if you aren’t a trader, this is ‘electronic equity-like’ — redeemable, transferable, with long-term positioning.",
    },
    urgency: {
      title: "⏳ Why act now?",
      items: [
        "🔥 One-time release — only in the first batch",
        "⚡ Limited supply — once sold out, it’s gone",
        "🚀 Early users = early power — Pioneer Council has strategic voice",
      ],
    },
    process: {
      title: "🔐 Transparent process",
      steps: [
        "Connect wallet — MetaMask or WalletConnect",
        "Buy NFT — click ‘Buy Now’ and confirm",
        "Activate utility — activate license at www.lumir.finance",
        "Challenge Accepted — join 13W Challenge & Elite Roadmap",
      ],
    },
    trust: {
      title: "🛡 Trust & Assurance",
      items: [
        "Backed by BeQ Holdings Group — investment & trust management",
        "Proprietary TBI — Trader Behavioral Index",
        "Global community — VN, Thailand, India, US, EU",
        "Transparency — Rewards on-chain, no fixed-return promises",
        "WF 90-day buyback — minimum 90% (terms apply)",
      ],
    },
    faq: {
      title: "❓ FAQ — Value Protection (Pioneer NFT)",
      items: [
        { q: "Q1. Does Pioneer NFT guarantee value?", a: "Yes. Includes Value Protection — redeem after 90 days to receive at least 90% of original mint price." },
        { q: "Q2. Why wait 90 days?", a: "First 90 days to experience benefits and for LUMIR to operate capital and sustain reward pools." },
        { q: "Q3. If I used some benefits, can I still redeem?", a: "Yes. After 90 days you still receive 90%; typical usage is <10% of total value." },
        { q: "Q4. What do I receive upon redemption?", a: "Stablecoins (USDT/USDC) via smart contract or the official WealthFarming portal." },
        { q: "Q5. What if I stop after 180 days?", a: "No refund guarantee, but you keep the NFT for Loyalty/utility or sell/transfer on marketplace." },
        { q: "Q6. Does this guarantee returns?", a: "No. Loyalty Rewards depend on ecosystem performance (not fixed). Protection only ensures ≥90% after 90 days." },
      ],
    },
    footerCta: {
      text:
        "<strong>Pioneer NFT</strong> is not just an NFT — it’s the key to status, leverage, and the journey to become an Elite Trader.",
      button: "Buy now on Wealthfarming.app",
    },
  },
};

const DATA_FR = {
  cta: {
    primaryHref: "https://wealthfarming.app/price-list",
    secondaryHref: "https://wealthfarming.app",
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
    problem: {
      title: "⚡ Histoire — Problème & Solution",
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
          "🔑 Personal & Community Branding",
          "🚀 Positionnement legacy — Genesis Holders",
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
    },
    process: {
      title: "🔐 Processus transparent",
      steps: [
        "Connecter le wallet — MetaMask ou WalletConnect",
        "Acheter le NFT — cliquer ‘Buy Now’ et confirmer",
        "Activer l’utilité — activer la licence sur www.lumir.finance",
        "Challenge Accepted — rejoindre 13W Challenge & Elite Roadmap",
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

function SectionHeader({ kicker, title, desc }: { kicker?: string; title: string; desc?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <div className="text-xs font-semibold tracking-widest text-muted-foreground">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-2 text-muted-foreground">{desc}</p> : null}
    </div>
  );
}

export default function PioneerLandingPage() {
  const { i18n } = useTranslation();
  const lang = (i18n?.language || "vi").split("-")[0] as "vi" | "en" | "fr";
  const data = lang === "en" ? DATA_EN : lang === "fr" ? DATA_FR : DATA_VI;
  const { hero, cta, sections } = data;
  const [modalActive, setModalActive] = useState(false);
  const { isDesktop } = useInterface();

  return (
    <div>
      <HeaderDesktopFull changeAt={190} />
      <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
      {isDesktop && (
        <div className="w-full h-[260px] relative z-[1]">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image src={indexBanner} alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
        </div>
      )}
      <div className="w-full bg-white flex flex-col gap-0 overflow-visible max-md:pt-20 max-md:pb-10 lumir-landing">
        <style jsx>{`
          :global(.lumir-landing .text-muted-foreground) {
            color: hsl(var(--foreground) / 0.82) !important;
          }
          :global(.lumir-landing p) {
            line-height: 1.7;
          }
        `}</style>
        <main className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      {/* HERO */}
      <section className="grid gap-8 lg:grid-cols-12 lg:items-center">
        <div className="space-y-6 lg:col-span-7">
          <div className="flex flex-wrap gap-2">
            {hero.badges.map((b) => (
              <Badge key={b} variant="secondary" className="uppercase tracking-wide">
                {b}
              </Badge>
            ))}
          </div>
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
            {hero.title}
          </h1>
          <p className="text-lg text-muted-foreground">{hero.subtitle}</p>
          <p className="text-sm text-muted-foreground">{hero.blurb}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild size="lg">
              <a href={cta.primaryHref} target="_blank" rel="noopener noreferrer">
                {hero.primary}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={cta.secondaryHref} target="_blank" rel="noopener noreferrer">
                {hero.secondary}
              </a>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <Card className="border-dashed">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Rocket className="h-5 w-5" /> Pioneer NFT
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                NFT duy nhất mang đến cả giá trị sử dụng và cơ chế bảo toàn vốn minh bạch.
              </p>
              <div className="flex items-center gap-2 text-xs">
                <ShieldCheck className="h-4 w-4" />
                Bảo toàn tối thiểu 90% sau 90 ngày (áp dụng điều khoản).
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Users className="h-4 w-4" /> Team Access 10 thành viên – 13W Challenge.
              </div>
              <div className="flex items-center gap-2 text-xs">
                <Brain className="h-4 w-4" /> AI Coaching 24/7 & Trader Behavioral Index.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      {/* STORY */}
      <section className="space-y-4">
        <SectionHeader title={sections.story.title} />
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardContent className="space-y-4 pt-6 text-sm text-muted-foreground">
              {sections.story.parts.slice(0, 2).map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4 pt-6 text-sm text-muted-foreground">
              {sections.story.parts.slice(2).map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      {/* COMPARE TABLE */}
      <section className="space-y-6">
        <SectionHeader title={sections.compare.title} />
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/2">{sections.compare.left}</TableHead>
                <TableHead className="w-1/2">{sections.compare.right}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sections.compare.rows.map(([l, r], i) => (
                <TableRow key={i}>
                  <TableCell className="align-top">{l}</TableCell>
                  <TableCell className="align-top">{r}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Alert>
          <Target className="h-4 w-4" />
          <AlertTitle className="font-semibold">Pioneer NFT</AlertTitle>
          <AlertDescription>
            Tấm vé để bước từ “Trader bình thường” sang chuẩn Market Wizard.
          </AlertDescription>
        </Alert>
      </section>

      <Separator className="my-10" />

      {/* PROBLEM & SOLUTION */}
      <section className="space-y-6">
        <SectionHeader title={sections.problem.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {sections.problem.bullets.map((b, i) => (
            <Card key={i}>
              <CardContent className="pt-6 text-sm text-muted-foreground">{b}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* BENEFITS */}
      <section className="space-y-8">
        <SectionHeader title={sections.benefits.title} />
        <div className="grid gap-6 lg:grid-cols-2">
          {[sections.benefits.pro, sections.benefits.premium].map((pkg) => (
            <Card key={pkg.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Crown className="h-5 w-5" /> {pkg.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{pkg.intro}</p>
                <div className="rounded-lg bg-muted/40 p-3 text-xs font-medium">
                  {pkg.value}
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                  {pkg.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="h-5 w-5" /> {sections.benefits.team.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                {sections.benefits.team.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Trophy className="h-5 w-5" /> {sections.benefits.intangible.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {sections.benefits.intangible.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4" /> {it}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-10" />

      {/* LOYALTY */}
      <section className="space-y-6">
        <SectionHeader title={sections.loyalty.title} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sections.loyalty.items.map((it) => (
            <Card key={it}>
              <CardContent className="pt-6 text-sm text-muted-foreground">{it}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* VALUE SIMULATION */}
      <section className="space-y-6">
        <SectionHeader title={sections.valueSim.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {sections.valueSim.scenarios.map((sc) => (
            <Card key={sc.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Coins className="h-5 w-5" /> {sc.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                {sc.lines.map((l) => (
                  <p key={l}>{l}</p>
                ))}
                {"highlight" in sc && sc.highlight ? (
                  <div className="rounded-lg bg-muted/40 p-2 text-xs font-semibold text-foreground">
                    {sc.highlight}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      {/* PRICING COMPARE */}
      <section className="space-y-6">
        <SectionHeader title={sections.pricingCompare.title} />
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                {sections.pricingCompare.header.map((h) => (
                  <TableHead key={h}>{h}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {sections.pricingCompare.rows.map((row, i) => (
                <TableRow key={i}>
                  {row.map((cell, j) => (
                    <TableCell key={j} className="align-top">
                      {cell === "✔️" ? (
                        <Check className="h-4 w-4" />
                      ) : cell === "❌" ? (
                        <X className="h-4 w-4" />
                      ) : cell === "-" ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        cell
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <Separator className="my-10" />

      {/* GROWTH SIM */}
      <section className="space-y-4">
        <SectionHeader title={sections.growthSim.title} />
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {sections.growthSim.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <Alert>
          <Activity className="h-4 w-4" />
          <AlertTitle className="font-semibold">Lưu ý</AlertTitle>
          <AlertDescription>{sections.growthSim.note}</AlertDescription>
        </Alert>
      </section>

      <Separator className="my-10" />

      {/* VALUE PROTECTION */}
      <section className="space-y-6">
        <SectionHeader title={sections.valueProtection.title} />
        <div className="grid gap-6 lg:grid-cols-3">
          {sections.valueProtection.blocks.map((b) => (
            <Card key={b.title}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <b.icon className="h-5 w-5" /> {b.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{b.text}</CardContent>
            </Card>
          ))}
        </div>
        <Alert>
          <ShieldCheck className="h-4 w-4" />
          <AlertTitle className="font-semibold">{sections.valueProtection.alert.title}</AlertTitle>
          <AlertDescription>
            {sections.valueProtection.alert.desc}
          </AlertDescription>
        </Alert>
      </section>

      <Separator className="my-10" />

      {/* HEADLINE CTA */}
      <section className="rounded-2xl border bg-card p-8 text-center shadow-sm">
        <div className="text-xs font-semibold tracking-widest text-muted-foreground">
          {sections.headlineCTA.kicker}
        </div>
        <h3 className="mt-2 text-2xl font-bold">
          {sections.headlineCTA.title}
        </h3>
        <div className="mx-auto my-4 flex max-w-sm items-center gap-3 text-muted-foreground">
          <span className="h-px flex-1 bg-border" />
          {sections.headlineCTA.or}
          <span className="h-px flex-1 bg-border" />
        </div>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          {sections.headlineCTA.subtitle}
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <a href={cta.secondaryHref} target="_blank" rel="noopener noreferrer">
              {sections.headlineCTA.cta}
            </a>
          </Button>
        </div>
      </section>

      <Separator className="my-10" />

      {/* AUDIENCE & URGENCY */}
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Users className="h-5 w-5" /> {sections.audience.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {sections.audience.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
            <Alert variant="default" className="mt-4">
              <BarChart3 className="h-4 w-4" />
              <AlertDescription className="text-xs text-muted-foreground">
                {sections.audience.foot}
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-5 w-5" /> {sections.urgency.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {sections.urgency.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <Rocket className="h-4 w-4" /> {it}
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button asChild>
                <a href={cta.primaryHref} target="_blank" rel="noopener noreferrer">
                  Mua Ngay 🚀
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-10" />

      {/* PROCESS & TRUST */}
      <section className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Lock className="h-5 w-5" /> {sections.process.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-sm text-muted-foreground">
              {sections.process.steps.map((s, i) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold">
                    {i + 1}
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ShieldCheck className="h-5 w-5" /> {sections.trust.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-2 text-sm text-muted-foreground">
              {sections.trust.items.map((it) => (
                <li key={it} className="flex items-center gap-2">
                  <HandCoins className="h-4 w-4" /> {it}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-10" />

      {/* FAQ */}
      <section className="space-y-4">
        <SectionHeader title={sections.faq.title} />
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {sections.faq.items.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* FOOTER CTA */}
      <footer className="mt-12 rounded-2xl border bg-muted/40 p-6 text-center text-sm text-muted-foreground">
        <p dangerouslySetInnerHTML={{ __html: sections.footerCta.text ?? "" }} />
        <div className="mt-4">
          <Button asChild size="lg">
            <a href={cta.primaryHref} target="_blank" rel="noopener noreferrer">
              {sections.footerCta.button}
            </a>
          </Button>
        </div>
      </footer>
        </main>
      </div>
      <FooterFull fixed={false} setModalActive={setModalActive} modalActive={modalActive} />
    </div>
  );
}
