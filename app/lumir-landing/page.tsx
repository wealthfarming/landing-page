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
    <p class="lead">“Pioneer NFT – Không chỉ là nghệ thuật, mà là quyền lực trong tay bạn”</p>
    <p>
      <span class="badge">Số lượng giới hạn</span>
      <span class="badge">Quyền truy cập độc quyền</span>
      <span class="badge">Tiện ích thực</span>
    </p>
    <p>👉 Trở thành một trong những Pioneers đầu tiên định hình tương lai behavioral trading cùng BeQ Ops LUMIR.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Mua NFT Ngay</a></p>
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
      <li>🔥 Phát hành một lần – chỉ trong đợt đầu</li>
      <li>⚡ Nguồn cung giới hạn – hết là không còn</li>
      <li>🚀 Người dùng sớm = Quyền lực sớm – Pioneer Council quyết định nhiều hướng đi chiến lược</li>
    </ul>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Mua Ngay 🚀</a></p>
  </section>

  <section>
    <h2>🔐 Quy trình minh bạch</h2>
    <ol>
      <li>Kết nối ví – MetaMask hoặc WalletConnect</li>
      <li>Mua NFT – bấm “Buy Now” và xác nhận</li>
      <li>Kích hoạt tiện ích – active license trên <a href="https://www.lumir.finance" target="_blank" rel="noopener">www.lumir.finance</a></li>
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
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Mua ngay trên Wealthfarming.app</a></p>
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
    <p class="lead">“Pioneer NFT – Not just art, but power in your hands.”</p>
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
    <p>If “Market Wizards” is the knowledge legacy of legends, then the <strong>Market Wizard NFT</strong> is the pioneer badge for a new generation — those who train behavior, build a Trader DNA, and become legends in the digital era.</p>
    <p>📌 With the Pioneer NFT, you don’t just own a digital asset — you hold the position to write the next chapter of Market Wizards on blockchain.</p>
  </section>

  <section>
    <h2>⚖️ Regular Trader vs. Market Wizard</h2>
    <table class="table-small">
      <thead>
        <tr><th>Regular Trader</th><th>Market Wizard</th></tr>
      </thead>
      <tbody>
        <tr><td>Trades emotionally, prone to FOMO/FUD</td><td>Iron discipline, always follows the system</td></tr>
        <tr><td>Short-term P/L focus, quits easily</td><td>Measures behavior, optimizes for the long term</td></tr>
        <tr><td>Lacks planning, relies on luck</td><td>Has strategy, method, and a behavioral map (Trader DNA)</td></tr>
        <tr><td>Fights alone, burns out easily</td><td>24/7 AI Coach + supportive community</td></tr>
        <tr><td>Low survival rate, account blow-ups</td><td>Builds legacy, becomes a legend</td></tr>
      </tbody>
    </table>
    <p>👉 <strong>Pioneer NFT</strong> is your ticket from the left column to the right — from “regular trader” → Market Wizard in the blockchain era.</p>
  </section>

  <section>
    <h2>⚡ The Problem &amp; The Solution</h2>
    <p><strong>90% of traders fail.</strong> Not for lack of knowledge, but for lack of discipline, risk control, and behavioral mastery.</p>
    <p><strong>BeQ Ops LUMIR</strong> — the world’s first behavioral trading training platform — exists to change that:</p>
    <ul>
      <li>24/7 AI Coach to build discipline and mindset.</li>
      <li>Trader Behavioral Index (TBI) to decode your Trader DNA Map.</li>
      <li>13W Challenge &amp; Elite Roadmap to transform regular traders into Elite Traders.</li>
    </ul>
    <p>👉 <strong>Pioneer NFT</strong> is the access key to this ecosystem with exclusive benefits.</p>
  </section>

  <section>
    <h2>🎁 Tangible Benefits for Pioneer NFT Holders</h2>

    <div class="card">
      <h3>🎟 50 Pro SaaS Licenses</h3>
      <p>Equivalent to <strong>50 months</strong> on LUMIR — the complete behavioral trading training suite for traders.</p>
      <p><span class="tag">Value:</span> 12,450 USD</p>
      <p><em>You (or your community) get:</em></p>
      <ul>
        <li>🧬 Trader DNA Map with 12 core behavioral metrics (Emotion Regulation, Discipline, Timing Alignment, Risk Bias…)</li>
        <li>📈 Monthly behavior reports + 2 deep-dive analyses to surface strengths/weaknesses</li>
        <li>🤖 24/7 AI Coaching — Growth Protocols, Notes, Daily Planner, personalized KPIs</li>
        <li>⏰ Timing Alignment Index (TAI) — pinpoints your precise “golden trading hours”</li>
        <li>🛡 Risk &amp; Money Management Tools — protect against losses caused by poor discipline</li>
        <li>🎯 13W Challenge + Mastery Room Access — 13-week discipline challenge with an elite community</li>
        <li>📊 Market Behavior Alerts — sentiment tracking, danger zones, Reaction Tracker</li>
      </ul>
      <p>👉 Perfect for traders who want higher win-rate, discipline, and emotional control.</p>
    </div>

    <div class="card" style="margin-top:14px;">
      <h3>🎟 10 Pro SaaS Licenses</h3>
      <p>Equivalent to <strong>10 months</strong> on LUMIR — premium, exclusive behavioral tooling for elite traders.</p>
      <p><span class="tag">Value:</span> 4,990 USD</p>
      <p><em>Exclusive access:</em></p>
      <ul>
        <li>🧬 Trader DNA Advanced — 21+ advanced behavioral metrics for a complete “psychological map”</li>
        <li>🏛 Elite Room Access — private space for Elite Traders &amp; institutional partners</li>
        <li>🚨 Advanced Market &amp; Behavior Alerts — Stoploss Heatmap, Liquidity Traps, Pattern Deviation…</li>
        <li>🛡 Behavioral Protection System™ — a psychological shield:
          <ul>
            <li>Burnout Detector (halts trading when exhausted)</li>
            <li>Emotional Lock Mode™ (locks behavior when emotions exceed thresholds)</li>
            <li>Bias Exposure (surfaces active cognitive biases)</li>
          </ul>
        </li>
        <li>🔥 Risk Drift &amp; Dead Zone Alerts — detect behavioral drift and dangerous “dead zones”</li>
        <li>📊 Quarterly Review + Advanced Coaching — behavioral experts help you reach the summit</li>
      </ul>
      <p>👉 Elite-only privileges to avoid psychological traps and reach global professional standards.</p>
    </div>

    <div class="two-col" style="margin-top:14px;">
      <div class="card">
        <ul>
          <li>👥 <strong>Team Access (10 Slots)</strong> → Redeemable as passes for 10 members to join the 13W Challenge</li>
          <li>🏛 <strong>Pioneer Council Membership</strong> → Seat on the Strategic Council</li>
          <li>⚡ <strong>Early Access &amp; Priority Right</strong> → Experience new releases before public</li>
          <li>🌟 <strong>Branding Recognition</strong> → Recognition on the LUMIR website &amp; Wealthfarming.app</li>
          <li>🎮 <strong>Exclusive Gamification Access</strong> → Priority slots in Challenges</li>
          <li>🤝 <strong>Referral Power (Optional)</strong> → Invite communities to unlock more benefits</li>
        </ul>
      </div>
      <div class="card">
        <h3>🌟 Intangible Benefits</h3>
        <ul>
          <li>🏅 Founding Badge — “Pioneer” honor in the LUMIR community</li>
          <li>🌍 Global Elite Network — Elite Traders, Leaders &amp; Investors worldwide</li>
          <li>🏛 Influence &amp; Voice in the Roadmap — directly via the Pioneer Council</li>
          <li>📈 First-Mover Advantage — reserved priority for the Pioneer cohort</li>
          <li>🔑 Personal &amp; Community Branding — symbol of leadership in behavioral trading</li>
          <li>🚀 Legacy Positioning — part of the “Genesis Holders” of the Market Wizard Collection</li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <h2>💎 Loyalty Rewards</h2>
    <ul>
      <li>🔗 On-chain &amp; transparent: automatic distribution via smart contracts</li>
      <li>📊 Performance-based: tied to license revenue, challenge pool, or ecosystem activity</li>
      <li>🎁 Flexible: token, credits, or exclusive upgrades</li>
      <li>🌱 Long-term commitment signal: <em>not a fixed-return promise</em>, but a reward for long-term alignment</li>
    </ul>
  </section>

  <section>
    <h2>📊 Pioneer NFT Redeemable Value (Illustration)</h2>
    <ol>
      <li>
        <h3>1) From the Loyalty Reward Pool (illustrative)</h3>
        <p>From ecosystem performance, the <strong>Reward Pool can reach ~756K USD/year</strong>.</p>
        <p>Assume <strong>30 Pioneer NFTs</strong> (and 30 Titan NFTs worth 50,000 USDC) are issued.</p>
        <p>👉 On average, each Pioneer NFT may receive <strong>~2,270 USD/year</strong> from Loyalty Rewards. <span class="muted">⚠️ Illustrative only, not a profit commitment.</span></p>
      </li>
      <li>
        <h3>2) Direct value from SaaS Licenses</h3>
        <p>Pioneer NFT includes <strong>50 Pro + 10 Premium SaaS Licenses</strong>.</p>
        <p>Reselling on secondary markets (e.g., Pro 249 USD/mo, Premium 499 USD/mo):</p>
        <ul>
          <li>50 Pro × 249 USD/mo = <strong>12,450 USD</strong></li>
          <li>10 Premium × 499 USD/mo = <strong>4,990 USD</strong></li>
        </ul>
        <p>👉 <strong>Total redeemable value = 17,440 USD</strong>.</p>
        <div class="note">✨ Thus, a Pioneer NFT holder immediately gets ~17,440 USD of practical utility from SaaS Licenses.</div>
      </li>
      <li>
        <h3>3) From Challenge &amp; Incentives</h3>
        <p>Pioneer NFT enables a 10-member team to join the 13W Challenge. If the team succeeds, it may receive extra rewards.</p>
        <p>Illustrative scenario: a successful Pioneer team may gain <strong>1,000–3,000 USD</strong> in credits or token rewards.</p>
      </li>
    </ol>
  </section>

  <section>
    <h2>📊 Value Comparison – Pro vs Premium vs Pioneer NFT</h2>
    <table>
      <thead>
        <tr>
          <th>Benefits</th>
          <th>Pro Subscription <br>($249/mo)</th>
          <th>Premium Subscription <br>($499/mo)</th>
          <th>Pioneer NFT <br>(One-time, Limited)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trader DNA Map</td>
          <td>12 core behavioral metrics</td>
          <td>21+ advanced behavioral metrics</td>
          <td>Full access to Pro + Premium (50 + 10 licenses)</td>
        </tr>
        <tr>
          <td>AI Coaching 24/7</td>
          <td>Notes, KPIs, Growth Protocol</td>
          <td>Advanced + expert coaching</td>
          <td>Included for you &amp; community via licenses</td>
        </tr>
        <tr>
          <td>Market Behavior Alerts</td>
          <td>Reaction Tracker, Market Zones</td>
          <td>Stoploss Heatmap, Liquidity Traps, Bias Exposure</td>
          <td>All Pro + Premium features</td>
        </tr>
        <tr>
          <td>Behavioral Protection System™</td>
          <td>❌</td>
          <td>✔️ Emotional Lock Mode™, Burnout Detector</td>
          <td>✔️ (via Premium licenses)</td>
        </tr>
        <tr>
          <td>13W Challenge Access</td>
          <td>Solo / Mastery Room</td>
          <td>Elite Challenge &amp; Quarterly Review</td>
          <td>👥 Team Access (10 members) + leadership</td>
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
          <td>🏅 Founding Badge — pioneer honor</td>
        </tr>
        <tr>
          <td>Loyalty Rewards</td>
          <td>❌</td>
          <td>❌</td>
          <td>💎 Performance-based allocation (non-fixed)</td>
        </tr>
        <tr>
          <td>Total redeemable value</td>
          <td>~$3,000/year</td>
          <td>~$6,000/year</td>
          <td>~$17,440 + strategic power + tradable NFT asset</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>📊 Illustrative Simulation (5%/week — $10,000 account)</h2>
    <ul>
      <li>Week 1: 10,000 → 10,500 USD</li>
      <li>Week 5: ~12,763 USD</li>
      <li>Week 10: ~16,285 USD</li>
      <li>Week 13: ~18,856 USD</li>
    </ul>
    <p>👉 Simulated profit: <strong>~8,856 USD</strong> (~+88.5% over 13 weeks).</p>
    <p class="note"><strong>Meaning:</strong> Not a profit guarantee — it illustrates the power of discipline + correct behavior. The 13W Challenge trains risk control, long-term thinking, and growth potential.</p>
  </section>

  <section>
    <h2>🎯 Aggregated Redeemable Value (Illustrative)</h2>
    <ul>
      <li>Loyalty Reward Pool: ~2,270 USD/year/NFT.</li>
      <li>SaaS License Value: ~18,000 USD in the first year.</li>
      <li>Challenge Incentives: 1,000–3,000 USD/team.</li>
    </ul>
    <p>👉 A Pioneer NFT is not just a blockchain collectible; it delivers tangible utility worth tens of thousands of USD, plus long-term upside &amp; Pioneer Council positioning.</p>
    <p class="muted">⚠️ All figures are illustrative only, based on internal scenarios. Actual value may differ and is not a profit commitment.</p>
  </section>

  <section>
    <h2>👤 Who Should Buy a Pioneer NFT?</h2>
    <ul>
      <li>Individual traders → raise win rate, discipline, and mindset</li>
      <li>Leaders/IBs → use the NFT to build &amp; train teams</li>
      <li>Investors/Blockchain enthusiasts → own scarce, real-utility, tradable assets</li>
      <li>Collectors/Community builders → seek the Pioneer badge &amp; status in the LUMIR ecosystem</li>
    </ul>
    <p>👉 Even if you’re not a trader, the Pioneer NFT is an <em>electronic equity-like asset</em> — redeemable, transferable, and a long-term status symbol.</p>
  </section>

  <section>
    <h2>⏳ Why Act Now?</h2>
    <ul>
      <li>🔥 One-time issuance — only in the first wave</li>
      <li>⚡ Limited supply — once it’s gone, it’s gone</li>
      <li>🚀 Early adopters = early power — the Pioneer Council influences strategic directions</li>
    </ul>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Buy Today 🚀</a></p>
  </section>

  <section>
    <h2>🔐 Transparent Process</h2>
    <ol>
      <li>Connect Wallet — MetaMask or WalletConnect</li>
      <li>Buy NFT — click “Buy Now” and confirm</li>
      <li>Unlock Utility — activate license at <a href="https://www.lumir.finance" target="_blank" rel="noopener">www.lumir.finance</a></li>
      <li>Challenge Accepted — join the 13W Challenge &amp; Elite Roadmap</li>
    </ol>
  </section>

  <section>
    <h2>🛡 Trust &amp; Assurance</h2>
    <ul>
      <li>Backed by BeQ Holdings Group — investment &amp; trust management</li>
      <li>Proprietary TBI — Trader Behavioral Index, applied behavioral science</li>
      <li>Global community — traders in VN, Thailand, India, US, EU</li>
      <li>Transparency — on-chain rewards, no fixed-return promises</li>
    </ul>
  </section>

  <section>
    <h2>❓ FAQ</h2>
    <dl>
      <dt>Can I trade the Pioneer NFT?</dt>
      <dd>✔️ Yes.</dd>
      <dt>When are benefits available?</dt>
      <dd>✔️ Immediately after mint.</dd>
      <dt>Are rewards guaranteed?</dt>
      <dd>❌ No, they are performance-based.</dd>
      <dt>How many NFTs will be issued?</dt>
      <dd>⚠️ Very limited, one-time issuance.</dd>
      <dt>What is the Pioneer Council?</dt>
      <dd>🏛 A strategic council that shapes the roadmap with LUMIR.</dd>
    </dl>
  </section>

  <footer style="margin-top:24px;">
    <p><strong>Pioneer NFT</strong> is more than an NFT. It is the key to position, power, and the journey to becoming an Elite Trader.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Buy now on Wealthfarming.app</a></p>
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
    <p class="lead">« Pioneer NFT – pas seulement de l’art, mais du pouvoir entre vos mains. »</p>
    <p>
      <span class="badge">Édition limitée</span>
      <span class="badge">Accès exclusif</span>
      <span class="badge">Utilité réelle</span>
    </p>
    <p>👉 Devenez l’un des premiers Pioneers à façonner l’avenir du behavioral trading avec BeQ Ops LUMIR.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Acheter le NFT maintenant</a></p>
  </header>

  <section>
    <h2>🔮 Market Wizard Collection – L’héritage des légendes du trading</h2>
    <p>Dans la finance, chaque trader sérieux connaît l’ouvrage classique <em>« Market Wizards »</em> de Jack D. Schwager.</p>
    <p>Ce sont les histoires de traders légendaires — Paul Tudor Jones, Ed Seykota, Bruce Kovner — qui ont conquis les marchés grâce à l’état d’esprit, à la discipline et à une maîtrise émotionnelle exceptionnelle.</p>
    <p>👉 La <strong>Market Wizard Collection NFT</strong> est née de cette inspiration.</p>
    <p>Si « Market Wizards » est l’héritage du savoir des légendes, alors le <strong>Market Wizard NFT</strong> est l’insigne des pionniers de la nouvelle génération — entraîner ses comportements, construire son ADN de Trader et devenir une légende à l’ère numérique.</p>
    <p>📌 Avec le Pioneer NFT, vous ne possédez pas seulement un actif numérique — vous avez la position pour écrire le prochain chapitre de Market Wizards sur la blockchain.</p>
  </section>

  <section>
    <h2>⚖️ Trader classique vs. Market Wizard</h2>
    <table class="table-small">
      <thead>
        <tr><th>Trader classique</th><th>Market Wizard</th></tr>
      </thead>
      <tbody>
        <tr><td>Trade sous l’émotion, sensible au FOMO/FUD</td><td>Discipline de fer, suit toujours le système</td></tr>
        <tr><td>Focalisé sur le P/L court terme, abandonne facilement</td><td>Mesure le comportement, optimise le long terme</td></tr>
        <tr><td>Manque de plan, dépend de la chance</td><td>Stratégie, méthode, carte comportementale (ADN de Trader)</td></tr>
        <tr><td>Se bat seul, s’épuise vite</td><td>Coach IA 24/7 + communauté de soutien</td></tr>
        <tr><td>Faible taux de survie, comptes « brûlés »</td><td>Construit un héritage, devient une légende</td></tr>
      </tbody>
    </table>
    <p>👉 <strong>Pioneer NFT</strong> est votre billet pour passer de la colonne de gauche à la droite — du « trader classique » au Market Wizard à l’ère de la blockchain.</p>
  </section>

  <section>
    <h2>⚡ Problème &amp; Solution</h2>
    <p><strong>90&nbsp;% des traders échouent.</strong> Pas par manque de connaissances, mais par manque de discipline, de contrôle du risque et de maîtrise comportementale.</p>
    <p><strong>BeQ Ops LUMIR</strong> — la première plateforme mondiale d’entraînement au trading comportemental — change la donne :</p>
    <ul>
      <li>Coach IA 24/7 pour la discipline et l’état d’esprit.</li>
      <li>Trader Behavioral Index (TBI) pour décoder votre carte ADN de Trader.</li>
      <li>13W Challenge &amp; Elite Roadmap pour transformer un trader classique en Elite Trader.</li>
    </ul>
    <p>👉 <strong>Pioneer NFT</strong> est votre clé d’accès à cet écosystème et à ses privilèges exclusifs.</p>
  </section>

  <section>
    <h2>🎁 Avantages tangibles pour les détenteurs</h2>

    <div class="card">
      <h3>🎟 50 licences SaaS Pro</h3>
      <p>Équivalent à <strong>50 mois</strong> sur LUMIR — suite complète d’entraînement comportemental pour traders.</p>
      <p><span class="tag">Valeur :</span> 12 450&nbsp;USD</p>
      <p><em>Vous (ou votre communauté) obtenez :</em></p>
      <ul>
        <li>🧬 Trader DNA Map avec 12 métriques comportementales clés (Régulation émotionnelle, Discipline, Timing Alignment, Risk Bias…)</li>
        <li>📈 Rapports mensuels + 2 analyses approfondies pour révéler forces/faiblesses</li>
        <li>🤖 Coach IA 24/7 — Protocoles de croissance, Notes, Planificateur quotidien, KPIs personnalisés</li>
        <li>⏰ Timing Alignment Index (TAI) — identifie vos « heures d’or » de trading</li>
        <li>🛡 Outils de gestion du risque et du capital — protègent des pertes dues au manque de discipline</li>
        <li>🎯 13W Challenge + accès Mastery Room — défi de 13 semaines avec communauté d’élite</li>
        <li>📊 Market Behavior Alerts — suivi du sentiment, zones dangereuses, Reaction Tracker</li>
      </ul>
      <p>👉 Parfait pour augmenter win-rate, discipline et maîtrise émotionnelle.</p>
    </div>

    <div class="card" style="margin-top:14px;">
      <h3>🎟 10 licences SaaS Pro</h3>
      <p>Équivalent à <strong>10 mois</strong> sur LUMIR — outils comportementaux exclusifs pour traders d’élite.</p>
      <p><span class="tag">Valeur :</span> 4 990&nbsp;USD</p>
      <p><em>Accès exclusif :</em></p>
      <ul>
        <li>🧬 Trader DNA Advanced — 21+ métriques avancées pour une « carte psychologique » complète</li>
        <li>🏛 Accès Elite Room — espace privé pour Elite Traders &amp; partenaires institutionnels</li>
        <li>🚨 Alertes avancées Marché &amp; Comportement — Stoploss Heatmap, Pièges de liquidité, Écarts de patterns…</li>
        <li>🛡 Behavioral Protection System™ — bouclier psychologique :
          <ul>
            <li>Burnout Detector (arrête le trading en cas d’épuisement)</li>
            <li>Emotional Lock Mode™ (verrouille les comportements au-delà des seuils)</li>
            <li>Bias Exposure (met en évidence les biais cognitifs actifs)</li>
          </ul>
        </li>
        <li>🔥 Alertes Risk Drift &amp; Dead Zone — détecte les dérives et « zones mortes » dangereuses</li>
        <li>📊 Quarterly Review + Coaching avancé — experts comportementaux pour atteindre l’excellence</li>
      </ul>
      <p>👉 Des privilèges d’élite pour éviter les pièges psychologiques et atteindre les standards professionnels mondiaux.</p>
    </div>

    <div class="two-col" style="margin-top:14px;">
      <div class="card">
        <ul>
          <li>👥 <strong>Team Access (10 places)</strong> → Convertibles en 10 passes pour rejoindre le 13W Challenge</li>
          <li>🏛 <strong>Membre du Pioneer Council</strong> → Siège au Conseil Stratégique</li>
          <li>⚡ <strong>Early Access &amp; droits prioritaires</strong> → Tester avant le public</li>
          <li>🌟 <strong>Reconnaissance de marque</strong> → Mise à l’honneur sur LUMIR &amp; Wealthfarming.app</li>
          <li>🎮 <strong>Accès Gamification exclusif</strong> → Priorité sur les Challenges</li>
          <li>🤝 <strong>Referral Power (optionnel)</strong> → Inviter des communautés pour débloquer plus d’avantages</li>
        </ul>
      </div>
      <div class="card">
        <h3>🌟 Avantages intangibles</h3>
        <ul>
          <li>🏅 Founding Badge — titre « Pioneer » dans la communauté LUMIR</li>
          <li>🌍 Global Elite Network — Elite Traders, Leaders &amp; Investors dans le monde</li>
          <li>🏛 Influence sur la feuille de route — via le Pioneer Council</li>
          <li>📈 First-Mover Advantage — priorité réservée aux Pioneers</li>
          <li>🔑 Personal &amp; Community Branding — symbole de leadership du trading comportemental</li>
          <li>🚀 Legacy Positioning — « Genesis Holders » de la Market Wizard Collection</li>
        </ul>
      </div>
    </div>
  </section>

  <section>
    <h2>💎 Loyalty Rewards</h2>
    <ul>
      <li>🔗 Distribution on-chain transparente via smart contracts</li>
      <li>📊 Basée sur la performance (pas de rendement fixe)</li>
      <li>🎁 Flexible : token, crédits ou mises à niveau exclusives</li>
      <li>🌱 Signal d’engagement long terme : <em>pas de promesse d’intérêt fixe</em></li>
    </ul>
  </section>

  <section>
    <h2>📊 Valeur « rachetable » du Pioneer NFT (illustration)</h2>
    <ol>
      <li>
        <h3>1) Depuis le Loyalty Reward Pool (illustratif)</h3>
        <p>La performance de l’écosystème peut porter le <strong>Reward Pool à ~756&nbsp;kUSD/an</strong>.</p>
        <p>Hypothèse : <strong>30 Pioneer NFTs</strong> (et 30 Titan NFTs à 50 000&nbsp;USDC) émis.</p>
        <p>👉 En moyenne, chaque Pioneer NFT peut recevoir <strong>~2 270&nbsp;USD/an</strong>. <span class="muted">⚠️ Illustratif, non garanti.</span></p>
      </li>
      <li>
        <h3>2) Valeur directe des licences SaaS</h3>
        <p>Inclut <strong>50 Pro + 10 Premium</strong> licences.</p>
        <ul>
          <li>50 Pro × 249 USD/mois = <strong>12 450&nbsp;USD</strong></li>
          <li>10 Premium × 499 USD/mois = <strong>4 990&nbsp;USD</strong></li>
        </ul>
        <p>👉 <strong>Valeur totale = 17 440&nbsp;USD</strong>.</p>
        <div class="note">✨ Donc, un détenteur de Pioneer NFT obtient immédiatement ~17 440&nbsp;USD d’utilité concrète grâce aux licences SaaS.</div>
      </li>
      <li>
        <h3>3) Depuis le Challenge &amp; les Incentives</h3>
        <p>Le Pioneer NFT permet de constituer une équipe de 10 pour le 13W Challenge. Si l’équipe réussit, elle peut recevoir des récompenses additionnelles.</p>
        <p>Scénario illustratif : une équipe Pioneer performante peut gagner <strong>1 000–3 000&nbsp;USD</strong> en crédits ou tokens.</p>
      </li>
    </ol>
  </section>

  <section>
    <h2>📊 Comparaison de valeur – Pro vs Premium vs Pioneer NFT</h2>
    <table>
      <thead>
        <tr>
          <th>Avantages</th>
          <th>Abonnement Pro <br>($249/mois)</th>
          <th>Abonnement Premium <br>($499/mois)</th>
          <th>Pioneer NFT <br>(Unique, Limité)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Trader DNA Map</td>
          <td>12 métriques comportementales clés</td>
          <td>21+ métriques avancées</td>
          <td>Accès complet Pro + Premium (50 + 10 licences)</td>
        </tr>
        <tr>
          <td>AI Coaching 24/7</td>
          <td>Notes, KPIs, Growth Protocol</td>
          <td>Avancé + coaching expert</td>
          <td>Inclus pour vous &amp; la communauté via licences</td>
        </tr>
        <tr>
          <td>Market Behavior Alerts</td>
          <td>Reaction Tracker, Market Zones</td>
          <td>Stoploss Heatmap, Pièges de liquidité, Bias Exposure</td>
          <td>Toutes les fonctions Pro + Premium</td>
        </tr>
        <tr>
          <td>Behavioral Protection System™</td>
          <td>❌</td>
          <td>✔️ Emotional Lock Mode™, Burnout Detector</td>
          <td>✔️ (via licences Premium)</td>
        </tr>
        <tr>
          <td>Accès 13W Challenge</td>
          <td>Solo / Mastery Room</td>
          <td>Elite Challenge &amp; Quarterly Review</td>
          <td>👥 Team Access (10 membres) + leadership</td>
        </tr>
        <tr>
          <td>Accès Communauté</td>
          <td>Trader Room</td>
          <td>Elite Room</td>
          <td>Pioneer Council Membership 🏛</td>
        </tr>
        <tr>
          <td>Reconnaissance</td>
          <td>❌</td>
          <td>❌</td>
          <td>🏅 Founding Badge — titre pionnier</td>
        </tr>
        <tr>
          <td>Loyalty Rewards</td>
          <td>❌</td>
          <td>❌</td>
          <td>💎 Allocation basée sur la performance (non fixe)</td>
        </tr>
        <tr>
          <td>Valeur totale « rachetable »</td>
          <td>~3 000&nbsp;USD/an</td>
          <td>~6 000&nbsp;USD/an</td>
          <td>~17 440&nbsp;USD + pouvoir stratégique + NFT échangeable</td>
        </tr>
      </tbody>
    </table>
  </section>

  <section>
    <h2>📊 Simulation illustrative (5&nbsp;%/semaine — compte 10 000&nbsp;USD)</h2>
    <ul>
      <li>Semaine 1 : 10 000 → 10 500 USD</li>
      <li>Semaine 5 : ~12 763 USD</li>
      <li>Semaine 10 : ~16 285 USD</li>
      <li>Semaine 13 : ~18 856 USD</li>
    </ul>
    <p>👉 Profit simulé : <strong>~8 856&nbsp;USD</strong> (~+88,5&nbsp;% en 13 semaines).</p>
    <p class="note"><strong>À retenir :</strong> ce n’est pas une garantie de profit — cela illustre la puissance de la discipline + des bons comportements. Le 13W Challenge entraîne le contrôle du risque, la vision long terme et le potentiel de croissance.</p>
  </section>

  <section>
    <h2>🎯 Valeur agrégée « rachetable » (illustrative)</h2>
    <ul>
      <li>Loyalty Reward Pool : ~2 270&nbsp;USD/an/NFT.</li>
      <li>Valeur des licences SaaS : ~18 000&nbsp;USD la première année.</li>
      <li>Challenge Incentives : 1 000–3 000&nbsp;USD/équipe.</li>
    </ul>
    <p>👉 Le Pioneer NFT n’est pas qu’un collectible blockchain ; il apporte une utilité tangible valant des dizaines de milliers de dollars, plus un potentiel long terme &amp; une place au Pioneer Council.</p>
    <p class="muted">⚠️ Chiffres purement illustratifs, basés sur des scénarios internes. La valeur réelle peut différer ; aucune promesse de rendement.</p>
  </section>

  <section>
    <h2>👤 Qui devrait acheter un Pioneer NFT&nbsp;?</h2>
    <ul>
      <li>Traders individuels → augmenter win-rate, discipline et mindset</li>
      <li>Leaders/IB → utiliser le NFT pour construire &amp; former des équipes</li>
      <li>Investisseurs/enthousiastes blockchain → posséder un actif rare, utile et échangeable</li>
      <li>Collectionneurs/bâtisseurs de communauté → viser l’insigne Pioneer &amp; le statut dans l’écosystème LUMIR</li>
    </ul>
    <p>👉 Même sans trader, le Pioneer NFT est un <em>actif proche d’une « equity » électronique</em> — rachetable, transférable et symbole durable de positionnement.</p>
  </section>

  <section>
    <h2>⏳ Pourquoi agir maintenant&nbsp;?</h2>
    <ul>
      <li>🔥 Émission unique — seulement lors de la première vague</li>
      <li>⚡ Offre limitée — une fois épuisée, c’est fini</li>
      <li>🚀 Early adopters = early power — le Pioneer Council influence les orientations stratégiques</li>
    </ul>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Acheter aujourd’hui 🚀</a></p>
  </section>

  <section>
    <h2>🔐 Processus transparent</h2>
    <ol>
      <li>Connecter le wallet — MetaMask ou WalletConnect</li>
      <li>Acheter le NFT — cliquer « Buy Now » puis confirmer</li>
      <li>Déverrouiller l’utilité — activer la licence sur <a href="https://www.lumir.finance" target="_blank" rel="noopener">www.lumir.finance</a></li>
      <li>Challenge Accepted — rejoindre le 13W Challenge &amp; l’Elite Roadmap</li>
    </ol>
  </section>

  <section>
    <h2>🛡 Confiance &amp; Garanties</h2>
    <ul>
      <li>Soutenu par BeQ Holdings Group — investissement &amp; gestion de trusts</li>
      <li>TBI propriétaire — Trader Behavioral Index, sciences comportementales appliquées</li>
      <li>Communauté mondiale — VN, Thaïlande, Inde, US, UE</li>
      <li>Transparence — récompenses on-chain, sans promesse de rendement fixe</li>
    </ul>
  </section>

  <section>
    <h2>❓ FAQ</h2>
    <dl>
      <dt>Puis-je échanger (revendre) le Pioneer NFT&nbsp;?</dt>
      <dd>✔️ Oui.</dd>
      <dt>Quand les avantages sont-ils disponibles&nbsp;?</dt>
      <dd>✔️ Immédiatement après le mint.</dd>
      <dt>Les rewards sont-ils garantis&nbsp;?</dt>
      <dd>❌ Non, ils dépendent de la performance.</dd>
      <dt>Combien de NFTs seront émis&nbsp;?</dt>
      <dd>⚠️ Très limité, émission unique.</dd>
      <dt>Qu’est-ce que le Pioneer Council&nbsp;?</dt>
      <dd>🏛 Un conseil stratégique qui co-définit la feuille de route avec LUMIR.</dd>
    </dl>
  </section>

  <footer style="margin-top:24px;">
    <p><strong>Pioneer NFT</strong> est plus qu’un NFT. C’est la clé de la position, du pouvoir et du chemin vers l’Elite Trader.</p>
    <p><a class="cta" href="https://wealthfarming.app" target="_blank" rel="noopener">Acheter maintenant sur Wealthfarming.app</a></p>
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


