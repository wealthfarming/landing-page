'use client';
import React, { useState } from 'react';
import HeadderDesktopFull from "@/components/header/header-desktop";
import FooterFull from '@/components/footer/footer-full';
import VideoBox from '@/components/footer/video_box';
import { useTranslation } from 'react-i18next';
import { useInterface } from '@/components/context/interface-context';
import Image from 'next/image';

const lumirContentVi = `
<section id="pioneer-nft" style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.65; color:#111; max-width:1000px; margin:0 auto; padding:24px;">
  <style>
    #pioneer-nft h1, #pioneer-nft h2, #pioneer-nft h3 { line-height:1.25; margin: 1.2em 0 .6em; }
    #pioneer-nft h1 { font-size: 2rem; }
    #pioneer-nft h2 { font-size: 1.5rem; }
    #pioneer-nft h3 { font-size: 1.15rem; }
    #pioneer-nft .lead { font-size:1.1rem; opacity:.9; }
    #pioneer-nft .muted { opacity:.7; }
    #pioneer-nft .badge { display:inline-block; background:#f5f5f5; border:1px solid #e5e5e5; padding:.25rem .6rem; border-radius:999px; margin-right:.4rem; font-size:.9rem; }
    #pioneer-nft .cta { display:inline-block; padding:.75rem 1.1rem; border-radius:.6rem; background:#111; color:#fff; text-decoration:none; font-weight:600; }
    #pioneer-nft .cta:hover { background:#000; }
    #pioneer-nft .card { border:1px solid #eee; border-radius:14px; padding:18px; background:#fff; box-shadow: 0 1px 2px rgba(0,0,0,.04); }
    #pioneer-nft ul { margin: .2rem 0 .9rem 1.2rem; }
    #pioneer-nft li { margin:.25rem 0; }
    #pioneer-nft table { width:100%; border-collapse:collapse; margin:1rem 0; font-size:.98rem; }
    #pioneer-nft th, #pioneer-nft td { border:1px solid #eaeaea; padding:.6rem .7rem; vertical-align:top; }
    #pioneer-nft th { background:#fafafa; text-align:left; }
    #pioneer-nft .two-col { display:grid; grid-template-columns: 1fr 1fr; gap:18px; }
    @media (max-width: 720px) { #pioneer-nft .two-col { grid-template-columns:1fr; } }
    #pioneer-nft .note { background:#fffdf4; border:1px solid #f0e6c5; padding:.8rem 1rem; border-radius:.6rem; }
    #pioneer-nft .tag { font-weight:600; }
    #pioneer-nft .table-small th, #pioneer-nft .table-small td { font-size:.95rem; }
  </style>

  <header>
    <h1>Pioneer NFT | Market Wizard Collection</h1>
    <p class="lead">“Pioneer NFT – Not Just Art, But Power in Your Hands”</p>
    <p>
      <span class="badge">Limited Supply</span>
      <span class="badge">Exclusive Access</span>
      <span class="badge">Real Utility</span>
    </p>
    <p>👉 Trở thành một trong những Pioneers đầu tiên định hình tương lai behavioral trading cùng BeQ Ops LUMIR.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Buy NFT Now</a></p>
  </header>

  <section>
    <h2>🔮 Market Wizard Collection – Di sản từ những Huyền thoại Trading</h2>
    <p>Trong thế giới tài chính, có một cuốn sách kinh điển mà mọi trader nghiêm túc đều biết: <em>“Market Wizards”</em> của Jack D. Schwager.</p>
    <p>Đó là những câu chuyện về các trader huyền thoại – Paul Tudor Jones, Ed Seykota, Bruce Kovner… – những con người đã chinh phục thị trường không chỉ bằng kiến thức, mà bằng tư duy, kỷ luật, và khả năng quản trị cảm xúc phi thường.</p>
    <p>👉 Bộ sưu tập <strong>Market Wizard Collection NFT</strong> ra đời từ cảm hứng đó.</p>
    <p>Nếu “Market Wizards” là di sản tri thức của thế hệ trader huyền thoại, thì <strong>Market Wizard NFT</strong> chính là chứng chỉ tiên phong cho thế hệ trader mới – những người muốn bước vào hành trình huấn luyện hành vi, xây dựng Trader DNA, và trở thành huyền thoại trong kỷ nguyên kỹ thuật số.</p>
    <p>📌 Với Pioneer NFT, bạn không chỉ sở hữu một tài sản số, mà còn nắm giữ vị thế để viết tiếp chương mới của Market Wizards trong thời đại blockchain.</p>
  </section>

  <section>
    <h2>⚖️ Trader Bình Thường vs. Market Wizard</h2>
    <table class="table-small">
      <thead>
        <tr><th>Trader Bình Thường</th><th>Market Wizard</th></tr>
      </thead>
      <tbody>
        <tr><td>Giao dịch theo cảm xúc, dễ bị FOMO/FUD</td><td>Kỷ luật thép, luôn tuân thủ hệ thống</td></tr>
        <tr><td>Đo lường P/L ngắn hạn, dễ bỏ cuộc</td><td>Đo lường hành vi, tối ưu dài hạn</td></tr>
        <tr><td>Thiếu kế hoạch, phụ thuộc may mắn</td><td>Có chiến lược, phương pháp, bản đồ hành vi (Trader DNA)</td></tr>
        <tr><td>Tự chiến đấu một mình, dễ nản</td><td>Huấn luyện AI Coach 24/7 + cộng đồng hỗ trợ</td></tr>
        <tr><td>Tỷ lệ sống sót thấp, dễ “cháy tài khoản”</td><td>Trở thành huyền thoại, xây dựng di sản trading</td></tr>
      </tbody>
    </table>
    <p>👉 <strong>Pioneer NFT</strong> là tấm vé để bạn bước từ cột bên trái sang cột bên phải – từ “Trader Bình Thường” → Market Wizard trong kỷ nguyên blockchain.</p>
  </section>

  <section>
    <h2>⚡ Câu chuyện – Vấn đề &amp; Giải pháp</h2>
    <p><strong>90% trader thất bại.</strong> Không phải vì họ thiếu kiến thức, mà vì họ thiếu kỷ luật, quản trị rủi ro và kiểm soát hành vi.</p>
    <p><strong>BeQ Ops LUMIR</strong> – nền tảng huấn luyện hành vi giao dịch đầu tiên trên thế giới – ra đời để thay đổi điều đó:</p>
    <ul>
      <li>AI Coach 24/7 rèn kỷ luật và mindset.</li>
      <li>Trader Behavioral Index (TBI) giải mã Trader DNA Map.</li>
      <li>13W Challenge &amp; Elite Roadmap biến trader bình thường thành Elite Trader.</li>
    </ul>
    <p>👉 <strong>Pioneer NFT</strong> chính là tấm vé mở khóa hệ sinh thái này với đặc quyền không thể tìm thấy ở bất kỳ đâu khác.</p>
  </section>

  <section>
    <h2>🎁 Quyền lợi Hữu hình khi sở hữu Pioneer NFT</h2>

    <div class="card">
      <h3>🎟 50 Pro SaaS Licenses</h3>
      <p>Tương ứng <strong>50 tháng</strong> sử dụng nền tảng LUMIR – 50 tháng rèn luyện Trader chuyên nghiệp - bộ công cụ huấn luyện hành vi giao dịch toàn diện cho trader.</p>
      <p><span class="tag">Trị giá:</span> 12.450 USD</p>
      <p><em>Bạn (hoặc cộng đồng của bạn) sẽ được:</em></p>
      <ul>
        <li>🧬 Trader DNA Map với 12 chỉ số hành vi cốt lõi (Emotion Regulation, Discipline, Timing Alignment, Risk Bias…)</li>
        <li>📈 Báo cáo hành vi giao dịch hàng tháng + 2 phân tích chuyên sâu để nhận diện điểm mạnh/điểm yếu</li>
        <li>🤖 AI Coaching 24/7 – Growth Protocols, Notes, Daily Planner, KPI cá nhân hóa</li>
        <li>⏰ Timing Alignment Index (TAI) – xác định “giờ vàng giao dịch” chuẩn xác</li>
        <li>🛡 Risk &amp; Money Management Tools – bộ công cụ bảo vệ trader khỏi thua lỗ do kỷ luật kém</li>
        <li>🎯 13W Challenge + Mastery Room Access – thử thách kỷ luật trong 13 tuần, cùng cộng đồng rèn luyện Elite</li>
        <li>📊 Market Behavior Alerts – theo dõi tâm lý thị trường, vùng nguy hiểm, Reaction Tracker</li>
      </ul>
      <p>👉 Đây là lựa chọn hoàn hảo cho Trader muốn nâng win-rate, rèn kỷ luật, kiểm soát tâm lý.</p>
    </div>

    <div class="card" style="margin-top:14px;">
      <h3>🎟 10 Pro SaaS Licenses</h3>
      <p>Tương ứng <strong>10 tháng</strong> sử dụng nền tảng LUMIR – 10 tháng chuyên nghiệp - bộ công cụ huấn luyện hành vi giao dịch độc quyền cao cấp dành cho Elite trader.</p>
      <p><span class="tag">Trị giá:</span> 4.990 USD</p>
      <p><em>Quyền truy cập độc quyền:</em></p>
      <ul>
        <li>🧬 Trader DNA Advanced – hơn 21 chỉ số hành vi nâng cao để “giải mã bản đồ tâm lý” toàn diện</li>
        <li>🏛 Elite Room Access – không gian riêng cho Elite Trader &amp; đối tác tổ chức</li>
        <li>🚨 Advanced Market &amp; Behavior Alerts – Stoploss Heatmap, Liquidity Traps, Pattern Deviation…</li>
        <li>🛡 Behavioral Protection System™ – tấm khiên tâm lý cho trader:
          <ul>
            <li>Burnout Detector (ngăn giao dịch khi kiệt sức)</li>
            <li>Emotional Lock Mode™ (khóa hành vi khi cảm xúc vượt ngưỡng)</li>
            <li>Bias Exposure (nhận diện thiên kiến đang chi phối)</li>
          </ul>
        </li>
        <li>🔥 Risk Drift &amp; Dead Zone Alerts – phát hiện lệch hành vi và cảnh báo “vùng chết” nguy hiểm</li>
        <li>📊 Quarterly Review + Coaching nâng cao – chuyên gia hành vi đồng hành, đưa trader lên đỉnh cao</li>
      </ul>
      <p>👉 Đây chính là đặc quyền Elite, chỉ Premium mới có: bảo vệ trader khỏi “bẫy tâm lý” và đưa họ tới chuẩn mực chuyên nghiệp toàn cầu.</p>
    </div>

    <div class="two-col" style="margin-top:14px;">
      <div class="card">
        <ul>
          <li>👥 <strong>Team Access (10 Slots)</strong> → Quy đổi thành vé cho 10 thành viên cùng tham gia 13W Challenge</li>
          <li>🏛 <strong>Pioneer Council Membership</strong> → Quyền tham gia Hội đồng Chiến lược</li>
          <li>⚡ <strong>Early Access &amp; Priority Right</strong> → Trải nghiệm phiên bản mới trước công khai</li>
          <li>🌟 <strong>Branding Recognition</strong> → Vinh danh trên website LUMIR &amp; Wealthfarming.app</li>
          <li>🎮 <strong>Exclusive Gamification Access</strong> → Ưu tiên tham gia các Challenge</li>
          <li>🤝 <strong>Referral Power (Optional)</strong> → Quyền mời cộng đồng để mở thêm quyền lợi</li>
        </ul>
      </div>
      <div class="card">
        <h3>🌟 Quyền lợi Vô hình</h3>
        <ul>
          <li>🏅 Founding Badge – danh hiệu “Pioneer” trong cộng đồng LUMIR</li>
          <li>🌍 Global Elite Network – mạng lưới Elite Traders, Leaders &amp; Investors toàn cầu</li>
          <li>🏛 Influence &amp; Voice in Roadmap – tiếng nói trực tiếp qua Pioneer Council</li>
          <li>📈 First Mover Advantage – ưu tiên dành riêng cho thế hệ Pioneer</li>
          <li>🔑 Personal &amp; Community Branding – biểu tượng dẫn đầu phong trào giao dịch hành vi</li>
          <li>🚀 Legacy Positioning – thuộc nhóm “Genesis Holders” của Market Wizard Collection</li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <h2>💎 Loyalty Rewards</h2>
    <ul>
      <li>🔗 On-chain &amp; Minh bạch: phân phối tự động qua smart contract, công khai trên blockchain</li>
      <li>📊 Performance-based: gắn với doanh thu license, challenge pool, hoặc giao dịch hệ sinh thái</li>
      <li>🎁 Flexible Benefits: nhận dưới dạng token, credits, hoặc quyền lợi nâng cấp độc quyền</li>
      <li>🌱 Long-term Commitment Signal: <em>không phải cam kết lợi nhuận cố định</em>, là tưởng thưởng cho người đồng hành dài hạn</li>
    </ul>
  </section>

  <section>
    <h2>📊 Giả lập Giá trị Quy đổi Pioneer NFT</h2>
    <ol>
      <li>
        <h3>1) Từ Loyalty Reward Pool (giả lập minh họa)</h3>
        <p>Từ hoạt động đầu tư, hệ sinh thái phân bổ về hiệu suất giả lập, <strong>Reward Pool có thể đạt ~756K USD/năm</strong>.</p>
        <p>Giả sử có <strong>30 Pioneer NFT</strong> (và 30 Titan NFT trị giá 50.000 USDC) được phát hành.</p>
        <p>👉 Trung bình, mỗi Pioneer NFT có thể nhận <strong>~2.270 USD/năm</strong> từ cơ chế Loyalty Reward. <span class="muted">⚠️ Chỉ là giả lập minh họa, không phải cam kết lợi nhuận.</span></p>
      </li>
      <li>
        <h3>2) Từ giá trị trực tiếp của SaaS License</h3>
        <p>Pioneer NFT bao gồm <strong>50 Pro + 10 Premium SaaS Licenses</strong>.</p>
        <p>Nếu bán lại trên thị trường thứ cấp (ví dụ: Pro 249 USD/tháng, Premium 499 USD/tháng):</p>
        <ul>
          <li>50 Pro × 249 USD/tháng = <strong>12.450 USD</strong></li>
          <li>10 Premium × 499 USD/tháng = <strong>4.990 USD</strong></li>
        </ul>
        <p>👉 <strong>Tổng giá trị quy đổi = 17.440 USD</strong>.</p>
        <div class="note">✨ Như vậy: Pioneer NFT Holder nhận ngay ~17.440 USD giá trị sử dụng thực tế từ quyền lợi SaaS License.</div>
      </li>
      <li>
        <h3>3) Từ Challenge &amp; Incentive</h3>
        <p>Pioneer NFT cho phép tạo Team 10 người tham gia 13W Challenge. Nếu team vượt challenge, có thể nhận thêm reward pool.</p>
        <p>Kịch bản minh họa: một đội Pioneer thành công có thể mang về thêm <strong>1.000–3.000 USD</strong> bằng credits hoặc token reward.</p>
      </li>
    </ol>
  </section>

  <section>
    <h2>📊 So sánh giá trị – Pro vs Premium vs Pioneer NFT</h2>
    <table>
      <thead>
        <tr>
          <th>Quyền lợi</th>
          <th>Pro Subscription <br>($249/tháng)</th>
          <th>Premium Subscription <br>($499/tháng)</th>
          <th>Pioneer NFT <br>(One-time, Limited)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trader DNA Map</td>
          <td>12 chỉ số hành vi cốt lõi</td>
          <td>21+ chỉ số hành vi nâng cao</td>
          <td>Full access Pro + Premium (50 + 10 licenses)</td>
        </tr>
        <tr>
          <td>AI Coaching 24/7</td>
          <td>Notes, KPI, Growth Protocol</td>
          <td>Nâng cao + Coaching chuyên sâu</td>
          <td>Bao gồm toàn bộ Pro + Premium cho bạn &amp; cộng đồng</td>
        </tr>
        <tr>
          <td>Market Behavior Alerts</td>
          <td>Reaction Tracker, Market Zones</td>
          <td>Stoploss Heatmap, Liquidity Traps, Bias Exposure</td>
          <td>Toàn bộ Pro + Premium</td>
        </tr>
        <tr>
          <td>Behavioral Protection System™</td>
          <td>❌</td>
          <td>✔️ Emotional Lock Mode™, Burnout Detector</td>
          <td>✔️ (qua Premium licenses)</td>
        </tr>
        <tr>
          <td>13W Challenge Access</td>
          <td>Solo / Mastery Room</td>
          <td>Elite Challenge &amp; Quarterly Review</td>
          <td>👥 Team Access (10 members) + quyền lãnh đạo</td>
        </tr>
        <tr>
          <td>Community Access</td>
          <td>Trader Room</td>
          <td>Elite Room</td>
          <td>Pioneer Council Membership 🏛</td>
        </tr>
        <tr>
          <td>Recognition</td>
          <td>❌</td>
          <td>❌</td>
          <td>🏅 Founding Badge – danh hiệu tiên phong</td>
        </tr>
        <tr>
          <td>Loyalty Rewards</td>
          <td>❌</td>
          <td>❌</td>
          <td>💎 Performance-based allocation (non-fixed)</td>
        </tr>
        <tr>
          <td>Tổng giá trị quy đổi</td>
          <td>~3.000 USD/năm</td>
          <td>~6.000 USD/năm</td>
          <td>~17.440 USD + quyền lực chiến lược + tài sản NFT có thể giao dịch lại</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>📊 Minh họa giả lập (5%/tuần – tài khoản 10.000 USD)</h2>
    <ul>
      <li>Tuần 1: 10.000 → 10.500 USD</li>
      <li>Tuần 5: ~12.763 USD</li>
      <li>Tuần 10: ~16.285 USD</li>
      <li>Tuần 13: ~18.856 USD</li>
    </ul>
    <p>👉 Lợi nhuận giả lập: <strong>~8.856 USD</strong> (tăng trưởng gần +88,5% trong 13 tuần).</p>
    <p class="note"><strong>Ý nghĩa:</strong> Đây không phải “cam kết lợi nhuận”, mà là kịch bản minh họa cho sức mạnh của kỷ luật + hành vi đúng đắn. Tham gia 13W Challenge giúp rèn quản trị rủi ro, tư duy dài hạn, và khai thác tiềm năng tăng trưởng.</p>
  </section>

  <section>
    <h2>🎯 Tổng hợp giá trị quy đổi (kịch bản minh họa)</h2>
    <ul>
      <li>Reward Pool (Loyalty): ~2.270 USD/năm/NFT.</li>
      <li>SaaS License Value: ~18.000 USD/năm đầu tiên.</li>
      <li>Challenge Incentives: 1.000–3.000 USD/team.</li>
    </ul>
    <p>👉 Một Pioneer NFT không chỉ là bộ sưu tập blockchain, mà còn mang lại quyền lợi quy đổi hữu hình trị giá hàng chục ngàn USD, chưa kể upside từ việc nắm giữ lâu dài &amp; vị thế Pioneer Council.</p>
    <p class="muted">⚠️ Tất cả con số trên chỉ là giả lập minh họa dựa trên kịch bản nội bộ. Giá trị thực tế có thể khác biệt, không phải cam kết lợi nhuận.</p>
  </section>

  <section>
    <h2>👤 Ai nên mua Pioneer NFT?</h2>
    <ul>
      <li>Trader cá nhân → muốn nâng cao win rate, kỷ luật, mindset</li>
      <li>Leader/IB → dùng NFT để xây dựng &amp; huấn luyện đội nhóm</li>
      <li>Investor/Blockchain Enthusiast → sở hữu tài sản khan hiếm, utility thật, có thể giao dịch lại</li>
      <li>Collector/Community Builder → tìm kiếm danh hiệu Pioneer &amp; vị thế xã hội trong hệ sinh thái LUMIR</li>
    </ul>
    <p>👉 Ngay cả khi bạn không phải trader, Pioneer NFT vẫn là một <em>tài sản electronic equity-like</em> – có thể quy đổi, chuyển nhượng, và mang lại vị thế lâu dài.</p>
  </section>

  <section>
    <h2>⏳ Tại sao phải hành động ngay?</h2>
    <ul>
      <li>🔥 One-time Only – chỉ phát hành trong đợt đầu</li>
      <li>⚡ Limited Supply – hết là không còn</li>
      <li>🚀 Early Adopter = Early Power – Pioneer Council quyết định nhiều hướng đi chiến lược</li>
    </ul>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Buy Today 🚀</a></p>
  </section>

  <section>
    <h2>🔐 Quy trình minh bạch</h2>
    <ol>
      <li>Connect Wallet – MetaMask hoặc WalletConnect</li>
      <li>Buy NFT – click “Mint Now” và xác nhận</li>
      <li>Unlock Utility – active license qua dashboard <a href="https://www.lumir.finance" target="_blank" rel="noopener">www.lumir.finance</a></li>
      <li>Challenge Accepted – tham gia 13W Challenge &amp; Elite Roadmap</li>
    </ol>
  </section>

  <section>
    <h2>🛡 Niềm tin &amp; Bảo chứng</h2>
    <ul>
      <li>Backed by BeQ Holdings Group – tập đoàn đầu tư &amp; quản lý quỹ tín thác</li>
      <li>Công nghệ độc quyền TBI – Trader Behavioral Index, khoa học hành vi ứng dụng</li>
      <li>Cộng đồng toàn cầu – Trader tại VN, Thái Lan, Ấn Độ, Mỹ, EU đã tham gia</li>
      <li>Transparency – Rewards minh bạch, phân phối on-chain, không hứa hẹn lợi nhuận cố định</li>
    </ul>
  </section>

  <section>
    <h2>❓ FAQ</h2>
    <dl>
      <dt>Có thể trade lại Pioneer NFT?</dt>
      <dd>✔️ Có.</dd>
      <dt>Bao lâu nhận quyền lợi?</dt>
      <dd>✔️ Ngay sau khi mint.</dd>
      <dt>Rewards có cam kết lợi nhuận?</dt>
      <dd>❌ Không, performance-based.</dd>
      <dt>Có bao nhiêu NFT phát hành?</dt>
      <dd>⚠️ Giới hạn cực ít, chỉ 1 lần.</dd>
      <dt>Pioneer Council là gì?</dt>
      <dd>🏛 Hội đồng định hình chiến lược cùng đội ngũ LUMIR.</dd>
    </dl>
  </section>

  <footer style="margin-top:24px;">
    <p><strong>Pioneer NFT</strong> không chỉ là một NFT. Đây là chiếc chìa khóa mở ra vị thế, quyền lực, và hành trình trở thành Elite Trader.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Mint Now on Wealthfarming.app</a></p>
  </footer>
</section>
`;

const lumirContentEn = `
<section id="pioneer-nft" style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.65; color:#111; max-width:1000px; margin:0 auto; padding:24px;">
  <style>
    #pioneer-nft h1, #pioneer-nft h2, #pioneer-nft h3 { line-height:1.25; margin: 1.2em 0 .6em; }
    #pioneer-nft h1 { font-size: 2rem; }
    #pioneer-nft h2 { font-size: 1.5rem; }
    #pioneer-nft h3 { font-size: 1.15rem; }
    #pioneer-nft .lead { font-size:1.1rem; opacity:.9; }
    #pioneer-nft .muted { opacity:.7; }
    #pioneer-nft .badge { display:inline-block; background:#f5f5f5; border:1px solid #e5e5e5; padding:.25rem .6rem; border-radius:999px; margin-right:.4rem; font-size:.9rem; }
    #pioneer-nft .cta { display:inline-block; padding:.75rem 1.1rem; border-radius:.6rem; background:#111; color:#fff; text-decoration:none; font-weight:600; }
    #pioneer-nft .cta:hover { background:#000; }
    #pioneer-nft .card { border:1px solid #eee; border-radius:14px; padding:18px; background:#fff; box-shadow: 0 1px 2px rgba(0,0,0,.04); }
    #pioneer-nft ul { margin: .2rem 0 .9rem 1.2rem; }
    #pioneer-nft li { margin:.25rem 0; }
    #pioneer-nft table { width:100%; border-collapse:collapse; margin:1rem 0; font-size:.98rem; }
    #pioneer-nft th, #pioneer-nft td { border:1px solid #eaeaea; padding:.6rem .7rem; vertical-align:top; }
    #pioneer-nft th { background:#fafafa; text-align:left; }
    #pioneer-nft .two-col { display:grid; grid-template-columns: 1fr 1fr; gap:18px; }
    @media (max-width: 720px) { #pioneer-nft .two-col { grid-template-columns:1fr; } }
    #pioneer-nft .note { background:#fffdf4; border:1px solid #f0e6c5; padding:.8rem 1rem; border-radius:.6rem; }
    #pioneer-nft .tag { font-weight:600; }
    #pioneer-nft .table-small th, #pioneer-nft .table-small td { font-size:.95rem; }
  </style>

  <header>
    <h1>Pioneer NFT | Market Wizard Collection</h1>
    <p class="lead">“Pioneer NFT – Not Just Art, But Power in Your Hands”</p>
    <p>
      <span class="badge">Limited Supply</span>
      <span class="badge">Exclusive Access</span>
      <span class="badge">Real Utility</span>
    </p>
    <p>👉 Become one of the first Pioneers shaping the future of behavioral trading with BeQ Ops LUMIR.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Buy NFT Now</a></p>
  </header>

  <section>
    <h2>🔮 Market Wizard Collection – A Legacy from Trading Legends</h2>
    <p>In finance, every serious trader knows the classic book <em>“Market Wizards”</em> by Jack D. Schwager.</p>
    <p>These are stories of legendary traders — Paul Tudor Jones, Ed Seykota, Bruce Kovner — who conquered markets not just with knowledge, but with mindset, discipline, and exceptional emotional control.</p>
    <p>👉 The <strong>Market Wizard Collection NFT</strong> was born from that inspiration.</p>
    <p>If “Market Wizards” is the legacy of the legends, then the <strong>Market Wizard NFT</strong> is the pioneer badge for the new generation — those who want to train behavior, build a Trader DNA, and become legends in the digital era.</p>
    <p>📌 With the Pioneer NFT, you don’t just own a digital asset — you hold the power to write the next chapter of Market Wizards on blockchain.</p>
  </section>

  <section>
    <h2>⚖️ Regular Trader vs. Market Wizard</h2>
    <table class="table-small">
      <thead>
        <tr><th>Regular Trader</th><th>Market Wizard</th></tr>
      </thead>
      <tbody>
        <tr><td>Trades emotionally, prone to FOMO/FUD</td><td>Iron discipline, follows the system</td></tr>
        <tr><td>Focuses on short-term P/L</td><td>Measures behavior, optimizes long-term</td></tr>
        <tr><td>Relies on luck, lacks planning</td><td>Has strategy, method, and a behavioral map (Trader DNA)</td></tr>
        <tr><td>Goes alone, burns out easily</td><td>AI Coach 24/7 + supportive community</td></tr>
        <tr><td>Low survival rate</td><td>Builds legacy, becomes a legend</td></tr>
      </tbody>
    </table>
    <p>👉 <strong>Pioneer NFT</strong> is your ticket from the left column to the right — from a regular trader to a Market Wizard in the blockchain era.</p>
  </section>

  <section>
    <h2>⚡ The Problem &amp; The Solution</h2>
    <p><strong>90% of traders fail.</strong> Not for lack of knowledge, but for lack of discipline, risk control, and behavioral mastery.</p>
    <p><strong>BeQ Ops LUMIR</strong> — the first behavioral trading training platform — exists to change that:</p>
    <ul>
      <li>AI Coach 24/7 for discipline and mindset.</li>
      <li>Trader Behavioral Index (TBI) to decode your Trader DNA Map.</li>
      <li>13W Challenge &amp; Elite Roadmap to upgrade to Elite Trader.</li>
    </ul>
    <p>👉 <strong>Pioneer NFT</strong> is your access key to this ecosystem with exclusive benefits.</p>
  </section>

  <section>
    <h2>🎁 Tangible Benefits</h2>
    <div class="card">
      <h3>🎟 50 Pro SaaS Licenses</h3>
      <p>Equivalent to <strong>50 months</strong> on LUMIR — the all-in-one behavioral training suite for traders.</p>
      <p><span class="tag">Value:</span> 12,450 USD</p>
      <p><em>You (or your community) get:</em></p>
      <ul>
        <li>🧬 Trader DNA Map with 12 core behavioral metrics</li>
        <li>📈 Monthly behavior reports + 2 deep-dive analyses</li>
        <li>🤖 AI Coaching 24/7 — Growth Protocols, Notes, Planner, KPIs</li>
        <li>⏰ Timing Alignment Index (TAI) — your precise trading hours</li>
        <li>🛡 Risk &amp; Money Management Tools</li>
        <li>🎯 13W Challenge + Mastery Room Access</li>
        <li>📊 Market Behavior Alerts — sentiment, danger zones, reaction tracker</li>
      </ul>
      <p>👉 For traders who want higher win-rate, discipline, and emotional control.</p>
    </div>

    <div class="card" style="margin-top:14px;">
      <h3>🎟 10 Premium SaaS Licenses</h3>
      <p>Equivalent to <strong>10 months</strong> of LUMIR Premium — elite behavioral systems for professional traders.</p>
      <p><span class="tag">Value:</span> 4,990 USD</p>
      <p><em>Exclusive access:</em></p>
      <ul>
        <li>🧬 Trader DNA Advanced — 21+ advanced behavioral metrics</li>
        <li>🏛 Elite Room Access — private space for elites &amp; institutions</li>
        <li>🚨 Advanced Market &amp; Behavior Alerts — Heatmap, Liquidity Traps…</li>
        <li>🛡 Behavioral Protection System™ — psychological shield</li>
        <li>🔥 Risk Drift &amp; Dead Zone Alerts</li>
        <li>📊 Quarterly Review + Advanced Coaching</li>
      </ul>
      <p>👉 Elite-only privileges to protect traders from psychological traps.</p>
    </div>
  </section>

  <section>
    <h2>💎 Loyalty Rewards</h2>
    <ul>
      <li>🔗 On-chain, transparent distribution via smart contracts</li>
      <li>📊 Performance-based (not fixed returns)</li>
      <li>🎁 Flexible: token, credits, or exclusive upgrades</li>
      <li>🌱 Long-term alignment, no fixed-interest promises</li>
    </ul>
  </section>

  <section>
    <h2>📊 Pioneer NFT Value Simulation</h2>
    <ol>
      <li>
        <h3>1) Loyalty Reward Pool (illustrative)</h3>
        <p>From ecosystem performance, the <strong>Reward Pool can reach ~756K USD/year</strong>.</p>
        <p>Assume <strong>30 Pioneer NFTs</strong> (and 30 Titan NFTs at 50,000 USDC) are issued.</p>
        <p>👉 On average, each Pioneer NFT may get <strong>~2,270 USD/year</strong> from loyalty. <span class="muted">⚠️ Illustrative only, not a profit commitment.</span></p>
      </li>
      <li>
        <h3>2) Direct value from SaaS Licenses</h3>
        <p>Includes <strong>50 Pro + 10 Premium</strong> licenses.</p>
        <ul>
          <li>50 Pro × 249 USD/mo = <strong>12,450 USD</strong></li>
          <li>10 Premium × 499 USD/mo = <strong>4,990 USD</strong></li>
        </ul>
        <p>👉 <strong>Total redeemable value = 17,440 USD</strong>.</p>
      </li>
      <li>
        <h3>3) Challenge &amp; Incentives</h3>
        <p>Team of 10 for the 13W Challenge; successful teams may receive additional rewards.</p>
        <p>Illustration: a successful Pioneer team may earn <strong>1,000–3,000 USD</strong> in credits or token rewards.</p>
      </li>
    </ol>
  </section>

  <section>
    <h2>⏳ Why act now?</h2>
    <ul>
      <li>🔥 One-time issuance</li>
      <li>⚡ Limited supply</li>
      <li>🚀 Early adopters shape strategy via Pioneer Council</li>
    </ul>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Buy Today 🚀</a></p>
  </section>

  <section>
    <h2>🔐 Transparent process</h2>
    <ol>
      <li>Connect Wallet — MetaMask or WalletConnect</li>
      <li>Buy NFT — click “Mint Now” and confirm</li>
      <li>Unlock Utility — activate license on <a href="https://www.lumir.finance" target="_blank" rel="noopener">www.lumir.finance</a></li>
      <li>Challenge Accepted — join the 13W Challenge &amp; Elite Roadmap</li>
    </ol>
  </section>

  <section>
    <h2>🛡 Trust &amp; Assurance</h2>
    <ul>
      <li>Backed by BeQ Holdings Group</li>
      <li>Proprietary TBI — Trader Behavioral Index</li>
      <li>Global community — VN, Thailand, India, US, EU</li>
      <li>On-chain transparency — no fixed-interest promises</li>
    </ul>
  </section>

  <section>
    <h2>❓ FAQ</h2>
    <dl>
      <dt>Can I trade Pioneer NFT?</dt>
      <dd>✔️ Yes.</dd>
      <dt>When do I receive benefits?</dt>
      <dd>✔️ Immediately after mint.</dd>
      <dt>Are rewards guaranteed?</dt>
      <dd>❌ No, performance-based.</dd>
      <dt>How many NFTs?</dt>
      <dd>⚠️ Very limited, one-time issue.</dd>
      <dt>What is the Pioneer Council?</dt>
      <dd>🏛 A strategic council shaping the roadmap with LUMIR.</dd>
    </dl>
  </section>

  <footer style="margin-top:24px;">
    <p><strong>Pioneer NFT</strong> is more than an NFT — it is your key to position, power, and the journey to becoming an Elite Trader.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Buy Now on Wealthfarming.app</a></p>
  </footer>
</section>
`;

const lumirContentFr = `
<section id="pioneer-nft" style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; line-height:1.65; color:#111; max-width:1000px; margin:0 auto; padding:24px;">
  <style>
    #pioneer-nft h1, #pioneer-nft h2, #pioneer-nft h3 { line-height:1.25; margin: 1.2em 0 .6em; }
    #pioneer-nft h1 { font-size: 2rem; }
    #pioneer-nft h2 { font-size: 1.5rem; }
    #pioneer-nft h3 { font-size: 1.15rem; }
    #pioneer-nft .lead { font-size:1.1rem; opacity:.9; }
    #pioneer-nft .muted { opacity:.7; }
    #pioneer-nft .badge { display:inline-block; background:#f5f5f5; border:1px solid #e5e5e5; padding:.25rem .6rem; border-radius:999px; margin-right:.4rem; font-size:.9rem; }
    #pioneer-nft .cta { display:inline-block; padding:.75rem 1.1rem; border-radius:.6rem; background:#111; color:#fff; text-decoration:none; font-weight:600; }
    #pioneer-nft .cta:hover { background:#000; }
    #pioneer-nft .card { border:1px solid #eee; border-radius:14px; padding:18px; background:#fff; box-shadow: 0 1px 2px rgba(0,0,0,.04); }
    #pioneer-nft ul { margin: .2rem 0 .9rem 1.2rem; }
    #pioneer-nft li { margin:.25rem 0; }
    #pioneer-nft table { width:100%; border-collapse:collapse; margin:1rem 0; font-size:.98rem; }
    #pioneer-nft th, #pioneer-nft td { border:1px solid #eaeaea; padding:.6rem .7rem; vertical-align:top; }
    #pioneer-nft th { background:#fafafa; text-align:left; }
    #pioneer-nft .two-col { display:grid; grid-template-columns: 1fr 1fr; gap:18px; }
    @media (max-width: 720px) { #pioneer-nft .two-col { grid-template-columns:1fr; } }
    #pioneer-nft .note { background:#fffdf4; border:1px solid #f0e6c5; padding:.8rem 1rem; border-radius:.6rem; }
    #pioneer-nft .tag { font-weight:600; }
    #pioneer-nft .table-small th, #pioneer-nft .table-small td { font-size:.95rem; }
  </style>

  <header>
    <h1>Pioneer NFT | Market Wizard Collection</h1>
    <p class="lead">« Pioneer NFT – pas seulement de l’art, mais du pouvoir entre vos mains »</p>
    <p>
      <span class="badge">Édition limitée</span>
      <span class="badge">Accès exclusif</span>
      <span class="badge">Utilité réelle</span>
    </p>
    <p>👉 Devenez l’un des premiers Pioneers à façonner l’avenir du behavioral trading avec BeQ Ops LUMIR.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Minter le Pioneer NFT maintenant 🚀</a></p>
  </header>

  <section>
    <h2>🔮 Market Wizard Collection – L’héritage des légendes du trading</h2>
    <p>Dans la finance, chaque trader sérieux connaît l’ouvrage classique <em>« Market Wizards »</em> de Jack D. Schwager.</p>
    <p>Ce sont les histoires de traders légendaires — Paul Tudor Jones, Ed Seykota, Bruce Kovner — qui ont conquis les marchés grâce à l’état d’esprit, à la discipline et à une maîtrise émotionnelle exceptionnelle.</p>
    <p>👉 La <strong>Market Wizard Collection NFT</strong> est née de cette inspiration.</p>
    <p>Si « Market Wizards » est l’héritage des légendes, alors le <strong>Market Wizard NFT</strong> est l’insigne des pionniers de la nouvelle génération — entraîner ses comportements, forger son ADN de Trader et devenir une légende à l’ère numérique.</p>
    <p>📌 Avec le Pioneer NFT, vous ne possédez pas seulement un actif numérique — vous portez le pouvoir d’écrire le prochain chapitre de Market Wizards sur la blockchain.</p>
  </section>

  <section>
    <h2>⚖️ Trader classique vs. Market Wizard</h2>
    <table class="table-small">
      <thead>
        <tr><th>Trader classique</th><th>Market Wizard</th></tr>
      </thead>
      <tbody>
        <tr><td>Commerce sous l’émotion, FOMO/FUD</td><td>Discipline de fer, suit le système</td></tr>
        <tr><td>Se concentre sur le P/L court terme</td><td>Mesure le comportement, optimise le long terme</td></tr>
        <tr><td>Manque de plan, dépend de la chance</td><td>Stratégie, méthode, carte comportementale (ADN de Trader)</td></tr>
        <tr><td>Se bat seul, s’épuise facilement</td><td>Coach IA 24/7 + communauté de soutien</td></tr>
        <tr><td>Faible taux de survie</td><td>Devient une légende, construit un héritage</td></tr>
      </tbody>
    </table>
    <p>👉 <strong>Pioneer NFT</strong> est votre billet pour passer de la colonne de gauche à la droite — du trader classique au Market Wizard à l’ère de la blockchain.</p>
  </section>

  <section>
    <h2>⚡ Problème &amp; Solution</h2>
    <p><strong>90 % des traders échouent.</strong> Pas par manque de connaissances, mais par manque de discipline, de contrôle du risque et de maîtrise comportementale.</p>
    <p><strong>BeQ Ops LUMIR</strong> — la première plateforme d’entraînement au trading comportemental — change la donne :</p>
    <ul>
      <li>Coach IA 24/7 pour la discipline et l’état d’esprit.</li>
      <li>Trader Behavioral Index (TBI) pour décoder votre ADN de Trader.</li>
      <li>13W Challenge &amp; Elite Roadmap pour passer au niveau Elite.</li>
    </ul>
    <p>👉 <strong>Pioneer NFT</strong> est votre clé d’accès à cet écosystème et à ses privilèges exclusifs.</p>
  </section>

  <section>
    <h2>🎁 Avantages tangibles</h2>
    <div class="card">
      <h3>🎟 50 licences SaaS Pro</h3>
      <p>Équivalentes à <strong>50 mois</strong> sur LUMIR — suite complète d’entraînement comportemental.</p>
      <p><span class="tag">Valeur :</span> 12 450 USD</p>
      <p><em>Vous (ou votre communauté) obtenez :</em></p>
      <ul>
        <li>🧬 Trader DNA Map avec 12 métriques comportementales clés</li>
        <li>📈 Rapports mensuels + 2 analyses approfondies</li>
        <li>🤖 Coach IA 24/7 — Protocoles, Notes, Planner, KPIs</li>
        <li>⏰ Timing Alignment Index (TAI) — heures de trading précises</li>
        <li>🛡 Outils de gestion du risque et du capital</li>
        <li>🎯 13W Challenge + Mastery Room</li>
        <li>📊 Market Behavior Alerts — sentiment, zones de danger, tracker</li>
      </ul>
      <p>👉 Pour élever win-rate, discipline et maîtrise émotionnelle.</p>
    </div>

    <div class="card" style="margin-top:14px;">
      <h3>🎟 10 licences SaaS Premium</h3>
      <p>Équivalentes à <strong>10 mois</strong> de LUMIR Premium — systèmes comportementaux pour traders professionnels.</p>
      <p><span class="tag">Valeur :</span> 4 990 USD</p>
      <p><em>Accès exclusif :</em></p>
      <ul>
        <li>🧬 Trader DNA Advanced — 21+ métriques avancées</li>
        <li>🏛 Accès Elite Room — espace privé pour élites &amp; institutions</li>
        <li>🚨 Alertes avancées — Heatmap, Pièges de liquidité…</li>
        <li>🛡 Behavioral Protection System™ — bouclier psychologique</li>
        <li>🔥 Alertes Risk Drift &amp; Dead Zone</li>
        <li>📊 Quarterly Review + Coaching avancé</li>
      </ul>
      <p>👉 Des privilèges Elite pour éviter les pièges psychologiques.</p>
    </div>
  </section>

  <section>
    <h2>💎 Loyalty Rewards</h2>
    <ul>
      <li>🔗 Distribution on-chain transparente via smart contracts</li>
      <li>📊 Basée sur la performance (sans rendement fixe)</li>
      <li>🎁 Flexible : token, crédits, mises à niveau exclusives</li>
      <li>🌱 Alignement long terme, sans promesse d’intérêt fixe</li>
    </ul>
  </section>

  <section>
    <h2>📊 Simulation de valeur du Pioneer NFT</h2>
    <ol>
      <li>
        <h3>1) Loyalty Reward Pool (illustratif)</h3>
        <p>La performance de l’écosystème peut porter le <strong>Reward Pool à ~756 K USD/an</strong>.</p>
        <p>Hypothèse : <strong>30 Pioneer NFTs</strong> (et 30 Titan NFTs à 50 000 USDC) émis.</p>
        <p>👉 En moyenne, chaque Pioneer NFT peut recevoir <strong>~2 270 USD/an</strong>. <span class="muted">⚠️ Illustratif, non garanti.</span></p>
      </li>
      <li>
        <h3>2) Valeur directe des licences SaaS</h3>
        <p>Inclut <strong>50 Pro + 10 Premium</strong>.</p>
        <ul>
          <li>50 Pro × 249 USD/mois = <strong>12 450 USD</strong></li>
          <li>10 Premium × 499 USD/mois = <strong>4 990 USD</strong></li>
        </ul>
        <p>👉 <strong>Valeur totale = 17 440 USD</strong>.</p>
      </li>
      <li>
        <h3>3) Challenge &amp; Incentives</h3>
        <p>Équipe de 10 pour le 13W Challenge ; équipes performantes peuvent recevoir des récompenses supplémentaires.</p>
        <p>Illustration : une équipe Pioneer peut gagner <strong>1 000–3 000 USD</strong> en crédits ou tokens.</p>
      </li>
    </ol>
  </section>

  <section>
    <h2>⏳ Pourquoi agir maintenant ?</h2>
    <ul>
      <li>🔥 Émission unique</li>
      <li>⚡ Offre limitée</li>
      <li>🚀 Les premiers adoptants influencent la stratégie via le Pioneer Council</li>
    </ul>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Minter aujourd’hui 🚀</a></p>
  </section>

  <section>
    <h2>🔐 Processus transparent</h2>
    <ol>
      <li>Connecter le wallet — MetaMask ou WalletConnect</li>
      <li>Mintez le NFT — cliquez « Mint Now » et confirmez</li>
      <li>Débloquez l’utilité — activez la licence sur <a href="https://www.lumir.finance" target="_blank" rel="noopener">www.lumir.finance</a></li>
      <li>Challenge Accepted — rejoignez le 13W Challenge &amp; Elite Roadmap</li>
    </ol>
  </section>

  <section>
    <h2>🛡 Confiance &amp; Garanties</h2>
    <ul>
      <li>Soutenu par BeQ Holdings Group</li>
      <li>TBI propriétaire — Trader Behavioral Index</li>
      <li>Communauté mondiale — VN, Thaïlande, Inde, USA, UE</li>
      <li>Transparence on-chain — sans promesse d’intérêt fixe</li>
    </ul>
  </section>

  <section>
    <h2>❓ FAQ</h2>
    <dl>
      <dt>Peut-on échanger le Pioneer NFT ?</dt>
      <dd>✔️ Oui.</dd>
      <dt>Quand recevoir les avantages ?</dt>
      <dd>✔️ Immédiatement après le mint.</dd>
      <dt>Les rewards sont-ils garantis ?</dt>
      <dd>❌ Non, basés sur la performance.</dd>
      <dt>Combien de NFTs ?</dt>
      <dd>⚠️ Très limité, émission unique.</dd>
      <dt>Qu’est-ce que le Pioneer Council ?</dt>
      <dd>🏛 Conseil stratégique qui co-construit la roadmap avec LUMIR.</dd>
    </dl>
  </section>

  <footer style="margin-top:24px;">
    <p><strong>Pioneer NFT</strong> est plus qu’un NFT — c’est la clé vers la position, le pouvoir et le parcours vers l’Elite Trader.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Minter maintenant sur Wealthfarming.app</a></p>
  </footer>
</section>
`;

const LumirLandingPage: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const { i18n } = useTranslation();
  const lang = (i18n?.language || 'en').split('-')[0];
  const content = lang === 'vi' ? lumirContentVi : lang === 'fr' ? lumirContentFr : lumirContentEn;
  const { isDesktop } = useInterface();
  return (
    <div>
      <HeadderDesktopFull changeAt={190} />
      <VideoBox modalActive={modalActive} setModalActive={setModalActive} />
      {isDesktop && (
        <div className="w-full h-[260px] relative z-[1]">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image src="https://res.cloudinary.com/dvtuy0whs/image/upload/v1751855448/nec_bg_kwkubx.jpg" alt="Index Banner" width={735} height={260} className="w-full h-[260px] object-cover" />
        </div>
      )}
      <div className="w-full py-6">
        <style>{`
          /* Theme adjustments for lumir landing */
          #pioneer-nft { color: rgb(15 23 42); }
          #pioneer-nft h1, #pioneer-nft h2, #pioneer-nft h3 { color: rgb(15 23 42); }
          /* Force override embedded content styles */
          #pioneer-nft a.cta { background-color: var(--primary, #0ea5e9) !important; border: 1px solid var(--primary, #0ea5e9) !important; color: #fff !important; transition: all .2s ease; box-shadow: 0 4px 14px rgba(14,165,233,.25); }
          #pioneer-nft a.cta:hover { background-color: var(--primary, #0ea5e9) !important; filter: brightness(0.95); transform: translateY(-1px); box-shadow: 0 6px 18px rgba(14,165,233,.32); }
          #pioneer-nft a.cta:focus-visible { outline: 2px solid rgba(14,165,233,.6); outline-offset: 2px; }
          #pioneer-nft .badge { background: rgba(14,165,233,.06); border-color: rgba(14,165,233,.25); color: rgb(7 89 133); }
          #pioneer-nft .card { border-color: rgba(2,132,199,.15); box-shadow: 0 8px 24px rgba(2,132,199,.06); }
          #pioneer-nft table { border: 1px solid rgba(2,132,199,.15); border-radius: 12px; overflow: hidden; }
          #pioneer-nft th { background: rgba(2,132,199,.05); }
          #pioneer-nft a { color: var(--primary, #0ea5e9); }
          #pioneer-nft .note { background: #f0fbff; border-color: rgba(2,132,199,.3); }
        `}</style>
        <div className="max-w-screen-lg mx-auto px-4 sm:px-6" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <FooterFull fixed={false} setModalActive={setModalActive} modalActive={modalActive} />
    </div>
  );
};

export default LumirLandingPage;


