import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import avatar from "./assets/avatar.jpg";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    setScrollProgress(progress);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
  <>
  <div
  className="scroll-progress"
  style={{ width: `${scrollProgress}%` }}
></div>
  <div className="background-animation">

  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>

</div>
  {/* Bong bóng */}

      <div className="bubbles">

        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </div>
      <div className="petals">
  <span>🌸</span>
  <span>🌸</span>
  <span>🌸</span>
  <span>🌸</span>
  <span>🌸</span>
  <span>🌸</span>
  <span>🌸</span>
  <span>🌸</span>
</div>

    {/* Navbar */}

    <nav className="navbar">

      <div className="logo">
        🌸 Portfolio
      </div>

      <ul>

        <li>
          <a href="#hero">
            🏠 Trang chủ
          </a>
        </li>

        <li>
          <a href="#about">
            👩 Giới thiệu
          </a>
        </li>

        <li>
          <a href="#assignments">
            📚 Bài tập
          </a>
        </li>

        <li>
          <a href="#conclusion">
            💌 Kết luận
          </a>
        </li>

      </ul>

    </nav>
    {/* HERO */}

      <section
        id="hero"
        className="hero"
        data-aos="fade-up"
      >
        <div className="hero-content">

          <img
            src={avatar}
            alt="Đàm Phương Nhung"
            className="avatar"
          />

          <h1>Đàm Phương Nhung</h1>

          <div className="info">

  <div className="info-item">
    🎓 <span>MSSV:</span> 25040982
  </div>

  <div className="info-item">
    🏫 <span>Lớp:</span> E252060
  </div>

  <div className="info-item">
    📖 <span>Ngành:</span> Ngôn ngữ Anh
  </div>

  <div className="info-item">
    📚 <span>Môn học:</span> Nhập môn Công nghệ số & Ứng dụng AI
  </div>

  <div className="info-item">
    👨‍🏫 <span>Giảng viên:</span> Lê Quang Minh
  </div>

  <div className="info-item">
    📧 <span>Email:</span> phuongnhungxq6@gmail.com
  </div>

</div>

          <a href="#about">

            <button className="hero-btn">

              ✨ Xem Portfolio

            </button>

          </a>

        </div>

      </section>
      <div className="progress-section">
    <h3>📚 Tiến độ học phần</h3>

    <div className="progress-bar">
        <div className="progress-fill"></div>
    </div>

    <p>✔ Hoàn thành 6/6 Assignment (100%)</p>
</div>
<div className="stat-card">
  <span>📚</span>
  <h3>6</h3>
  <p>Bài tập</p>
</div>

<div className="stat-card">
  <span>🤖</span>
  <h3>AI</h3>
  <p>Ứng dụng học tập</p>
</div>

<div className="stat-card">
  <span>🎯</span>
  <h3>100%</h3>
  <p>Hoàn thành</p>
</div>

<div className="stat-card">
  <span>📅</span>
  <h3>04/07/2026</h3>
  <p>Ngày hoàn thành</p>
</div>
      {/* GIỚI THIỆU */}

      <section
        id="about"
        className="about"
        data-aos="fade-up"
      >

        <h2 className="section-title">
    💖 Giới thiệu
</h2>

        <p>
          Xin chào! Em là <strong>Đàm Phương Nhung</strong>,
          sinh viên ngành <strong>Ngôn ngữ Anh</strong>,
          lớp <strong>E252060</strong>.
        </p>

        <p>
          Website này là Portfolio tổng hợp toàn bộ bài tập của học phần
          <strong> Nhập môn Công nghệ số và Ứng dụng AI</strong>.
        </p>

        <p>
          Em luôn mong muốn kết hợp giữa ngoại ngữ và công nghệ để phát triển
          bản thân trong thời đại chuyển đổi số.
        </p>
        <div className="goals">

  <div className="goal-card" data-aos="fade-right">

    <h3>🎯 Mục tiêu học tập và định hướng phát triển</h3>

    <p>
      Trong thời gian tới, em đặt mục tiêu tiếp tục nâng cao kiến thức về
      công nghệ số và trí tuệ nhân tạo, đồng thời rèn luyện kỹ năng sử dụng
      AI một cách hiệu quả, có trách nhiệm và đúng đạo đức học thuật.
    </p>

    <p>
      Bên cạnh đó, em sẽ chủ động ứng dụng AI vào học tập, nghiên cứu và
      phát triển các kỹ năng chuyên ngành ngoại ngữ nhằm nâng cao năng lực
      bản thân, đáp ứng yêu cầu của môi trường học tập và công việc trong
      thời đại số.
    </p>

  </div>

  <div className="goal-card" data-aos="fade-left">

    <h3>💼 Mục tiêu của Digital Portfolio</h3>

    <p>
      Portfolio môn Nhập môn Công nghệ số và Ứng dụng AI được xây dựng nhằm
      ghi lại quá trình học tập, thực hành và phát triển kỹ năng của bản thân
      trong suốt học phần.
    </p>

    <p>
      Thông qua Portfolio, em có thể hệ thống hóa kiến thức đã học, đánh giá
      sự tiến bộ của mình, đồng thời thể hiện khả năng ứng dụng công nghệ số
      và AI vào học tập một cách hiệu quả, sáng tạo và có trách nhiệm.
    </p>

  </div>

</div>

        <h3>🌸 Sở thích</h3>

        <div className="hobbies">

          <div className="hobby">
            📚 Học tiếng Anh
          </div>

          <div className="hobby">
            🎨 Tô màu
          </div>

          <div className="hobby">
            🏪 Đi nhà sách
          </div>

          <div className="hobby">
            ✏️ Mua đồ dùng học tập
          </div>

          <div className="hobby">
            📖 Đọc sách
          </div>

          <div className="hobby">
            🌸 Sưu tầm sticker
          </div>

        </div>

      </section>
      {/* DANH SÁCH BÀI TẬP */}

      <section
        id="assignments"
        className="assignments"
        data-aos="fade-up"
      >

        <h2 className="section-title">
    📚 Danh sách bài tập
</h2>

        <div className="cards">

          {/* Bài 1 */}

          <div className="card" data-aos="zoom-in">

            <h3>📘 Máy tính và các thiết bị ngoại vi</h3>

           <p>
  <strong>📝 Mô tả</strong><br />
  Tìm hiểu cấu tạo máy tính, thiết bị nhập, thiết bị xuất, bộ nhớ và các thành phần cơ bản của hệ thống máy tính.
</p>

<p>
  <strong>🎯 Mục tiêu</strong><br />
  Hiểu cấu tạo và chức năng của các thành phần phần cứng, từ đó nắm được nguyên lý hoạt động của máy tính.
</p>

<p>
  <strong>⚙️ Quá trình thực hiện</strong><br />
  • Nghiên cứu tài liệu môn học.<br />
  • Tìm hiểu từng thiết bị phần cứng.<br />
  • Hoàn thành bài tập và tổng hợp báo cáo.
</p>

<p>
  <strong>✨ Kết quả đạt được</strong><br />
  Nhận biết được các thành phần của máy tính và hiểu vai trò của từng thiết bị trong hệ thống.
</p>

<p>
  <strong>💻 Công cụ sử dụng</strong><br />
  Google Docs • ChatGPT • Google Search
</p>

            <a
              href="https://docs.google.com/document/d/1ABVfemrajvIJm8stOieTGr8dGyzF9n_z/edit?usp=drivesdk&ouid=111641925123829400531&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              🔍 Xem chi tiết
            </a>

          </div>

          {/* Bài 2 */}

          <div className="card" data-aos="zoom-in">

            <h3>📊 Khai thác dữ liệu và thông tin</h3>

            <p>
  <strong>📝 Mô tả</strong><br />
  Tìm hiểu cách thu thập, xử lý và khai thác dữ liệu để tạo ra thông tin có giá trị.
</p>

<p>
  <strong>🎯 Mục tiêu</strong><br />
  Hiểu sự khác nhau giữa dữ liệu và thông tin, biết cách tìm kiếm và đánh giá nguồn dữ liệu.
</p>

<p>
  <strong>⚙️ Quá trình thực hiện</strong><br />
  • Nghiên cứu tài liệu môn học.<br />
  • Phân tích ví dụ thực tế.<br />
  • Hoàn thành bài tập trên Google Docs.
</p>

<p>
  <strong>✨ Kết quả đạt được</strong><br />
  Hiểu được quy trình xử lý dữ liệu và cách khai thác thông tin phục vụ học tập.
</p>

<p>
  <strong>💻 Công cụ sử dụng</strong><br />
  Google Docs • ChatGPT • Google Search
</p>

            <a
              href="https://docs.google.com/document/d/1Innk4nNyGopqw8WrCsTIRbzrEga1it8I/edit?usp=drivesdk&ouid=111641925123829400531&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              🔍 Xem chi tiết
            </a>

          </div>

          {/* Bài 3 */}

          <div className="card" data-aos="zoom-in">

            <h3>🤖 Tổng quan về trí tuệ nhân tạo</h3>

            <p>
  <strong>📝 Mô tả</strong><br />
  Khái niệm AI, các ứng dụng phổ biến và vai trò của trí tuệ nhân tạo trong học tập và cuộc sống.
</p>

<p>
  <strong>🎯 Mục tiêu</strong><br />
  Hiểu khái niệm trí tuệ nhân tạo, nhận biết các lĩnh vực ứng dụng và biết cách sử dụng AI hỗ trợ học tập một cách hiệu quả.
</p>

<p>
  <strong>⚙️ Quá trình thực hiện</strong><br />
  • Nghiên cứu tài liệu về AI.<br />
  • Tìm hiểu các công cụ AI phổ biến.<br />
  • Phân tích ví dụ thực tế và hoàn thành bài tập.
</p>

<p>
  <strong>✨ Kết quả đạt được</strong><br />
  Hiểu được vai trò của AI trong học tập và cuộc sống, đồng thời biết ứng dụng AI một cách có trách nhiệm.
</p>

<p>
  <strong>💻 Công cụ sử dụng</strong><br />
  Google Docs • ChatGPT • Google Search
</p>

            <a
              href="https://docs.google.com/document/d/1ErcPzUPIqBvFBALWfIRR7vg-9TPt8irJ/edit?usp=drivesdk&ouid=111641925123829400531&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              🔍 Xem chi tiết
            </a>

          </div>

          {/* Bài 4 */}

          <div className="card" data-aos="zoom-in">

            <h3>💬 Giao tiếp và hợp tác trong môi trường số</h3>

            <p>
  <strong>📝 Mô tả</strong><br />
  Tìm hiểu các hình thức giao tiếp trực tuyến, làm việc nhóm và hợp tác trên các nền tảng số.
</p>

<p>
  <strong>🎯 Mục tiêu</strong><br />
  Rèn luyện kỹ năng giao tiếp và hợp tác trong môi trường số, đồng thời biết sử dụng các nền tảng trực tuyến để làm việc nhóm hiệu quả.
</p>

<p>
  <strong>⚙️ Quá trình thực hiện</strong><br />
  • Nghiên cứu các công cụ giao tiếp và cộng tác trực tuyến.<br />
  • Tìm hiểu cách chia sẻ tài liệu và làm việc nhóm trên môi trường số.<br />
  • Hoàn thành bài tập theo yêu cầu của học phần.
</p>

<p>
  <strong>✨ Kết quả đạt được</strong><br />
  Hiểu được vai trò của giao tiếp số, biết sử dụng các công cụ hỗ trợ làm việc nhóm và nâng cao kỹ năng hợp tác trực tuyến.
</p>

<p>
  <strong>💻 Công cụ sử dụng</strong><br />
  Google Docs • Google Drive • ChatGPT
</p>

            <a
              href="https://drive.google.com/file/d/185sdkW9L-vTRaCt1vhuXFYdyGF4_YJ1l/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              🔍 Xem chi tiết
            </a>

          </div>

          {/* Bài 5 */}

          <div className="card" data-aos="zoom-in">

            <h3>🎨 Sáng tạo nội dung số</h3>

<p>
  <strong>📝 Mô tả</strong><br />
  Tìm hiểu quy trình sáng tạo nội dung số và ứng dụng các công cụ hiện đại để thiết kế sản phẩm có tính thẩm mỹ và phù hợp với mục đích sử dụng.
</p>

<p>
  <strong>🎯 Mục tiêu</strong><br />
  Phát triển khả năng sáng tạo nội dung số, biết lựa chọn công cụ phù hợp và tạo ra sản phẩm trực quan, hấp dẫn.
</p>

<p>
  <strong>⚙️ Quá trình thực hiện</strong><br />
  • Nghiên cứu các nguyên tắc thiết kế nội dung số.<br />
  • Tìm hiểu và sử dụng các công cụ hỗ trợ sáng tạo.<br />
  • Thiết kế, chỉnh sửa và hoàn thiện sản phẩm theo yêu cầu.
</p>

<p>
  <strong>✨ Kết quả đạt được</strong><br />
  Nâng cao kỹ năng thiết kế nội dung số, biết ứng dụng công nghệ và AI để tạo ra sản phẩm sáng tạo, rõ ràng và có tính thẩm mỹ.
</p>

<p>
  <strong>💻 Công cụ sử dụng</strong><br />
  Canva • Google Docs • ChatGPT
</p>
            <a
              href="https://docs.google.com/document/d/1JtnFiTuarqHa9urlwtlYrkt3_CPUv4nr/edit?usp=drivesdk&ouid=111641925123829400531&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              🔍 Xem chi tiết
            </a>

          </div>

          {/* Bài 6 */}

          <div className="card" data-aos="zoom-in">

            <h3>🛡️ An toàn và liêm chính học thuật trong môi trường số</h3>

            <p>
  <strong>📝 Mô tả</strong><br />
  Tìm hiểu về an toàn thông tin, bảo vệ dữ liệu cá nhân, đạo đức số và nguyên tắc liêm chính học thuật khi sử dụng công nghệ và AI.
</p>

<p>
  <strong>🎯 Mục tiêu</strong><br />
  Nâng cao nhận thức về việc sử dụng công nghệ số và trí tuệ nhân tạo một cách an toàn, trung thực, có trách nhiệm và đúng chuẩn mực đạo đức học thuật.
</p>

<p>
  <strong>⚙️ Quá trình thực hiện</strong><br />
  • Nghiên cứu các quy định về an toàn thông tin và liêm chính học thuật.<br />
  • Tìm hiểu các rủi ro khi sử dụng AI và môi trường số.<br />
  • Phân tích tình huống thực tế và hoàn thành bài tập theo yêu cầu.
</p>

<p>
  <strong>✨ Kết quả đạt được</strong><br />
  Hiểu được tầm quan trọng của việc bảo vệ dữ liệu cá nhân, tôn trọng bản quyền và sử dụng AI một cách có trách nhiệm trong học tập cũng như cuộc sống.
</p>

<p>
  <strong>💻 Công cụ sử dụng</strong><br />
  Google Docs • ChatGPT • Google Search
</p>

            <a
              href="https://docs.google.com/document/d/19ICOzkn5-A9q_m1fdxH0RRMZtENSgBk3/edit?usp=drivesdk&ouid=111641925123829400531&rtpof=true&sd=true"
              target="_blank"
              rel="noreferrer"
            >
              🔍 Xem chi tiết
            </a>

          </div>

        </div>

      </section>
      <section className="timeline" data-aos="fade-up">

  <h2>🌸 Hành trình học tập</h2>

  <div className="timeline-container">

    <div className="timeline-item">
      <div className="circle">1</div>
      <h3>Bắt đầu học phần</h3>
      <p>Làm quen với công nghệ số và trí tuệ nhân tạo.</p>
    </div>

    <div className="timeline-item">
      <div className="circle">2</div>
      <h3>Thực hành</h3>
      <p>Hoàn thành các bài tập và ứng dụng AI vào học tập.</p>
    </div>

    <div className="timeline-item">
      <div className="circle">3</div>
      <h3>Xây dựng Portfolio</h3>
      <p>Tổng hợp toàn bộ kết quả học tập trên website cá nhân.</p>
    </div>

    <div className="timeline-item">
      <div className="circle">4</div>
      <h3>Hoàn thành</h3>
      <p>Ngày hoàn thành: <strong>04/07/2026</strong>.</p>
    </div>

  </div>

</section>
      {/* KẾT LUẬN */}

      <section
        id="conclusion"
        className="conclusion"
        data-aos="fade-up"
      >

        <h2 className="section-title">
    💌 Kết luận
</h2>

        <div className="conclusion-grid">

          <div className="conclusion-card" data-aos="fade-right">

            <h3>😥 Những khó khăn</h3>

            <p>
              Vì là sinh viên ngành Ngôn ngữ Anh nên em chưa có nền tảng vững
              về công nghệ thông tin. Trong quá trình học, em gặp khó khăn khi
              tiếp cận các khái niệm như AI, dữ liệu lớn, điện toán đám mây và
              nhiều công cụ số khác. Mỗi nền tảng có giao diện và cách sử dụng
              riêng nên em cần nhiều thời gian để làm quen.
            </p>

          </div>

          <div className="conclusion-card" data-aos="fade-left">

            <h3>📖 Bài học rút ra</h3>

            <p>
              Sau học phần này, em hiểu rõ hơn vai trò của công nghệ số và AI
              trong học tập, công việc và cuộc sống. Em nhận thức rằng AI là
              công cụ hỗ trợ chứ không thể thay thế hoàn toàn tư duy và khả năng
              sáng tạo của con người. Đồng thời em cũng nâng cao ý thức về đạo
              đức số, tính trung thực trong học tập và tinh thần học tập suốt
              đời.
            </p>

          </div>

          <div className="conclusion-card" data-aos="fade-right">

            <h3>💡 Cảm nhận về môn học</h3>

            <p>
              Là sinh viên ULIS, em nhận thấy học phần Nhập môn Công nghệ số và
              Ứng dụng AI mang lại rất nhiều kiến thức và kỹ năng thiết thực.
              Mặc dù ban đầu còn gặp khó khăn nhưng môn học đã giúp em biết cách
              ứng dụng AI hiệu quả vào học tập và chuẩn bị tốt hơn cho định
              hướng nghề nghiệp trong tương lai.
            </p>

          </div>

          <div className="conclusion-card" data-aos="fade-left">

            <h3>🌸 Lời cảm ơn</h3>

            <p>
              Em xin chân thành cảm ơn thầy Lê Quang Minh cùng quý thầy cô đã
              tận tình giảng dạy và hướng dẫn trong suốt quá trình học tập.
              Những kiến thức và kinh nghiệm mà thầy cô truyền đạt sẽ là nền
              tảng quý giá để em tiếp tục học hỏi và phát triển trong tương lai.
            </p>

          </div>

        </div>

      </section>
      <section className="thanks">

  <h2>💖 Cảm ơn thầy đã theo dõi Portfolio!</h2>

  <p>
    Em xin chân thành cảm ơn thầy đã dành thời gian xem và đánh giá Portfolio của em.
    Những kiến thức và trải nghiệm trong học phần sẽ là nền tảng để em tiếp tục học tập,
    ứng dụng công nghệ số và AI một cách hiệu quả, sáng tạo và có trách nhiệm.
  </p>

</section>
      <button
  className="back-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  ↑
</button>
<footer className="footer">

  <p>© 2026 Đàm Phương Nhung</p>

  <p>
    Portfolio môn Nhập môn Công nghệ số & Ứng dụng AI
  </p>

  <p>Made with ❤️ using React + Vite</p>

</footer>
      
  </>
);
}

export default App;