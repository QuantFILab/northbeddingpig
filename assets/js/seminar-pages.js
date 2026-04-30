(function(){
  function buildGallery(start, end, pngIndexes) {
    const png = new Set(pngIndexes || []);
    const items = [];
    for (let i = start; i <= end; i += 1) {
      const ext = png.has(i) ? 'png' : 'jpeg';
      items.push(`assets/images/seminars/docx-media/image${i}.${ext}`);
    }
    return items;
  }

  const seminars = [
    {
      id: 'local-imo',
      page: 'seminar-local-imo.html',
      title: 'เทคโนโลยีการใช้จุลินทรีย์ท้องถิ่น (IMO) สำหรับปรับปรุงคุณภาพพื้นคอก',
      badge: 'ถ่ายทอดเทคโนโลยี',
      topic: 'imo',
      topicLabel: 'จุลินทรีย์ท้องถิ่น',
      level: 'lecture',
      levelLabel: 'บรรยายและสาธิต',
      dateLabel: '28 ก.ค. 2568 - 21 ม.ค. 2569',
      placeLabel: 'แม่ริม แม่แตง เชียงดาว แม่แจ่ม',
      cardImage: 'assets/images/seminars/docx-media/image1.jpeg',
      summary: 'ถ่ายทอดความรู้การใช้จุลินทรีย์ท้องถิ่นเพื่อปรับปรุงพื้นคอกหมูหลุม พร้อมฝึกปฏิบัติและติดตามผลในหลายพื้นที่ของจังหวัดเชียงใหม่.',
      intro: 'การอบรมชุดนี้มุ่งเน้นให้เกษตรกรเข้าใจหลักการใช้จุลินทรีย์ท้องถิ่นในการจัดการพื้นคอกหมูหลุม เพื่อลดกลิ่น ปรับสภาพคอก และยกระดับการจัดการฟาร์มให้เหมาะสมกับบริบทของแต่ละพื้นที่.',
      highlights: [
        'อธิบายหลักการคัดเลือกและใช้จุลินทรีย์ท้องถิ่นให้เหมาะกับพื้นคอกหมูหลุม',
        'มีทั้งการบรรยาย ฝึกปฏิบัติ และการติดตามผลการใช้งานจริงในฟาร์ม',
        'เชื่อมโยงองค์ความรู้กับบริบทของกลุ่มเกษตรกรในแม่ริม แม่แตง เชียงดาว และแม่แจ่ม'
      ],
      sessions: [
        {
          title: 'แม่ริมและแม่แตง',
          date: '31 กรกฎาคม 2568',
          place: 'คณะเทคโนโลยีการเกษตร มหาวิทยาลัยราชภัฏเชียงใหม่ ศูนย์แม่ริม และเอราวัณฟาร์ม',
          speaker: 'นายสุคีพ ไชยมณี'
        },
        {
          title: 'เชียงดาว',
          date: '28 กรกฎาคม 2568 และ 6 สิงหาคม 2568',
          place: 'บ้านห้วยเป้า ตำบลทุ่งข้าวพวง อำเภอเชียงดาว',
          speaker: 'อาจารย์ ดร.ณัฐวุฒิ ครุฑไทย'
        },
        {
          title: 'แม่แจ่ม',
          date: '9 สิงหาคม 2568 และ 21 มกราคม 2569',
          place: 'บ้านแม่วาก โครงการพัฒนาพื้นที่สูงแบบโครงการหลวงแม่มะลอ',
          speaker: 'นริศรา เกิดสุข'
        }
      ],
      gallery: buildGallery(1, 19, [15, 19])
    },
    {
      id: 'fermented-feed',
      page: 'seminar-fermented-feed.html',
      title: 'เทคโนโลยีอาหารหมักและน้ำหมักชีวภาพเพื่อลดต้นทุนอาหารสัตว์',
      badge: 'ถ่ายทอดเทคโนโลยี',
      topic: 'feed',
      topicLabel: 'อาหารหมักและน้ำหมักชีวภาพ',
      level: 'workshop',
      levelLabel: 'เชิงปฏิบัติการ',
      dateLabel: '1 ส.ค. 2568 - 21 ม.ค. 2569',
      placeLabel: 'เชียงดาว แม่ริม แม่แตง แม่แจ่ม',
      cardImage: 'assets/images/seminars/docx-media/image20.jpeg',
      summary: 'เน้นการใช้วัตถุดิบท้องถิ่นทำอาหารหมักและน้ำหมักชีวภาพ เพื่อลดต้นทุนการเลี้ยงและเพิ่มประสิทธิภาพระบบหมูหลุม.',
      intro: 'การอบรมนี้เน้นให้เกษตรกรรู้จักการผลิตอาหารหมักและน้ำหมักชีวภาพจากวัตถุดิบในท้องถิ่น เพื่อลดค่าใช้จ่ายด้านอาหารสัตว์ พร้อมสาธิตการใช้งานในคอกหมูหลุมอย่างถูกต้อง.',
      highlights: [
        'สอนตั้งแต่การคัดเลือกวัตถุดิบ การหมักอาหาร และการผลิตหัวเชื้อน้ำหมักชีวภาพ',
        'เชื่อมโยงความรู้กับการลดกลิ่นและยกระดับสภาพแวดล้อมในคอก',
        'มีเวิร์กช็อปในหลายพื้นที่เพื่อให้เกษตรกรได้เห็นการประยุกต์ใช้จริง'
      ],
      sessions: [
        {
          title: 'เชียงดาว',
          date: '1 และ 7 ตุลาคม 2568',
          place: 'บ้านห้วยเป้า ตำบลทุ่งข้าวพวง อำเภอเชียงดาว',
          speaker: 'อาจารย์ ดร.ณัฐวุฒิ ครุฑไทย'
        },
        {
          title: 'แม่ริมและแม่แตง',
          date: '1 สิงหาคม 2568',
          place: 'คณะเทคโนโลยีการเกษตร มหาวิทยาลัยราชภัฏเชียงใหม่ ศูนย์แม่ริม และเอราวัณฟาร์ม',
          speaker: 'นายสุคีพ ไชยมณี และ อาจารย์ ดร.ณัฐวุฒิ ครุฑไทย'
        },
        {
          title: 'แม่แจ่ม',
          date: '9 สิงหาคม 2568 และ 21 มกราคม 2569',
          place: 'บ้านแม่วาก โครงการพัฒนาพื้นที่สูงแบบโครงการหลวงแม่มะลอ',
          speaker: 'นริศรา เกิดสุข'
        }
      ],
      gallery: buildGallery(20, 34, [])
    },
    {
      id: 'farm-standards',
      page: 'seminar-farm-standards.html',
      title: 'การออกแบบคอกหมูหลุม มาตรฐานฟาร์ม และการควบคุมป้องกันโรค',
      badge: 'มาตรฐานฟาร์ม',
      topic: 'standards',
      topicLabel: 'มาตรฐานฟาร์มและป้องกันโรค',
      level: 'certification',
      levelLabel: 'มาตรฐานและรับรอง',
      dateLabel: '19 ส.ค. 2568 - 7 ต.ค. 2568',
      placeLabel: 'แม่ริม แม่แตง เชียงดาว แม่แจ่ม',
      cardImage: 'assets/images/seminars/docx-media/image35.jpeg',
      summary: 'รวบรวมการอบรมด้านการออกแบบคอก มาตรฐานฟาร์มเลี้ยงหมูหลุม การป้องกันโรค และการเตรียมความพร้อมสู่การรับรอง GFM.',
      intro: 'หลักสูตรนี้เป็นแกนสำคัญของการยกระดับฟาร์มหมูหลุมให้มีมาตรฐาน ทั้งด้านโรงเรือน การป้องกันโรค การบันทึกข้อมูล และการเตรียมเอกสารสำหรับขอรับรองมาตรฐานในพื้นที่จริง.',
      highlights: [
        'มีวิทยากรจากหน่วยงานปศุสัตว์และมหาวิทยาลัยร่วมถ่ายทอดองค์ความรู้',
        'ต่อยอดจากการอบรมไปสู่การยื่นขอรับรอง GFM และการรับรองฟาร์มจริง',
        'มีภาพกิจกรรมทั้งการบรรยาย เวทีแลกเปลี่ยน และการลงพื้นที่ประเมินฟาร์ม'
      ],
      sessions: [
        {
          title: 'อบรมรวมเครือข่าย',
          date: '19 สิงหาคม 2568',
          place: 'ห้องประชุมบ้านนก adiCET มหาวิทยาลัยราชภัฏเชียงใหม่ ศูนย์แม่ริม',
          speaker: 'นายสัตวแพทย์อนุสรณ์ หอมขจร และคณะวิทยากร'
        },
        {
          title: 'แม่ริมและแม่แตง',
          date: '28 สิงหาคม 2568 และ 3 ตุลาคม 2568',
          place: 'คณะเทคโนโลยีการเกษตร มหาวิทยาลัยราชภัฏเชียงใหม่ ศูนย์แม่ริม',
          speaker: 'นายสัตวแพทย์พุทธิพล กองสุข และ นายสัตวแพทย์พชร ศรีประสาท'
        },
        {
          title: 'แม่แจ่ม',
          date: '7 ตุลาคม 2568',
          place: 'โครงการพัฒนาพื้นที่สูงแบบโครงการหลวงแม่มะลอ',
          speaker: 'นายสัตวแพทย์พชร ศรีประสาท'
        }
      ],
      gallery: buildGallery(35, 80, [54, 55, 56, 57])
    },
    {
      id: 'value-added-products',
      page: 'seminar-value-added-products.html',
      title: 'การแปรรูปและเพิ่มมูลค่าผลิตภัณฑ์จากหมูหลุมและการตลาดออนไลน์',
      badge: 'แปรรูปและตลาด',
      topic: 'processing',
      topicLabel: 'แปรรูปและเพิ่มมูลค่า',
      level: 'workshop',
      levelLabel: 'เชิงปฏิบัติการ',
      dateLabel: '17 ธ.ค. 2568 - 23 ม.ค. 2569',
      placeLabel: 'แม่ริม และศูนย์วิจัยผลิตภัณฑ์ปศุสัตว์เชียงใหม่',
      cardImage: 'assets/images/seminars/docx-media/image81.jpeg',
      summary: 'อบรมการสร้างมูลค่าเพิ่มให้ผลิตภัณฑ์หมูหลุม ตั้งแต่การตลาดออนไลน์จนถึงการแปรรูปผลิตภัณฑ์จริงในห้องปฏิบัติการ.',
      intro: 'ชุดการอบรมนี้เชื่อมการผลิตกับตลาด โดยเริ่มจากมุมมองโอกาสของตลาดผลิตภัณฑ์หมูหลุมออนไลน์ ก่อนต่อยอดสู่เวิร์กช็อปการแปรรูปและเพิ่มมูลค่าสินค้าให้พร้อมจำหน่าย.',
      highlights: [
        'ครอบคลุมทั้งการตลาดออนไลน์ กลยุทธ์สินค้าพรีเมียม และการแปรรูปจริง',
        'มีภาคปฏิบัติการตัดแต่งซากและแปรรูปเป็นผลิตภัณฑ์หลายรูปแบบ',
        'ช่วยยกระดับเกษตรกรจากผู้ผลิตวัตถุดิบสู่ผู้พัฒนาผลิตภัณฑ์'
      ],
      sessions: [
        {
          title: 'ตลาดออนไลน์และกลยุทธ์แบรนด์',
          date: '17 ธันวาคม 2568',
          place: 'ห้องประชุมบ้านนก adiCET มหาวิทยาลัยราชภัฏเชียงใหม่ ศูนย์แม่ริม',
          speaker: 'คุณสุพจน์ สิงห์โตศรี และ ผศ.ดร.สุพจน์ บุญแรง'
        },
        {
          title: 'แปรรูปผลิตภัณฑ์หมูหลุม',
          date: '23 มกราคม 2569',
          place: 'ศูนย์วิจัยและพัฒนาผลิตภัณฑ์ปศุสัตว์เชียงใหม่',
          speaker: 'ทีมวิทยากรด้านเทคโนโลยีอาหารและปศุสัตว์'
        },
        {
          title: 'ผลิตภัณฑ์ที่ฝึกปฏิบัติ',
          date: 'ภาคปฏิบัติการ',
          place: 'แหนมหมูหลุม ไส้อั่วสมุนไพรหมูหลุม และหมูหลุมแดดเดียว',
          speaker: 'กลุ่มผู้เข้าอบรมและคณะวิทยากร'
        }
      ],
      gallery: buildGallery(81, 99, [])
    },
    {
      id: 'km-exchange',
      page: 'seminar-km-exchange.html',
      title: 'การขยายผลและแลกเปลี่ยนเรียนรู้ (KM) ฟาร์มหมูหลุม',
      badge: 'แลกเปลี่ยนเรียนรู้',
      topic: 'exchange',
      topicLabel: 'ขยายผลและดูงาน',
      level: 'network',
      levelLabel: 'แลกเปลี่ยนเรียนรู้',
      dateLabel: '7 เมษายน 2569',
      placeLabel: 'แม่ริม จังหวัดเชียงใหม่',
      cardImage: 'assets/images/seminars/docx-media/image100.jpeg',
      summary: 'เวทีแลกเปลี่ยนเรียนรู้จากเกษตรกรต้นแบบ การมอบใบรับรองฟาร์มมาตรฐาน และการศึกษาดูงานฟาร์มหมูหลุมต้นแบบในพื้นที่แม่ริม.',
      intro: 'กิจกรรม KM ชุดนี้เป็นเวทีสรุปผลและต่อยอดองค์ความรู้จากทั้งโครงการ โดยเชื่อมเกษตรกรต้นแบบ หน่วยงานสนับสนุน และผู้ได้รับการรับรองมาตรฐานเข้าด้วยกัน พร้อมศึกษาดูงานฟาร์มจริง.',
      highlights: [
        'มีพิธีแสดงความยินดีและมอบใบรับรองฟาร์มมาตรฐานหมูหลุมให้แก่ นายจตุพร มูลอินทร์',
        'มีเวทีแลกเปลี่ยนประสบการณ์ ปัญหา อุปสรรค และแนวทางพัฒนาร่วมกัน',
        'มีการศึกษาดูงานฟาร์มต้นแบบเพื่อเห็นการจัดการทั้งด้านโรงเรือน อาหาร สุขภาพสัตว์ และการตลาด'
      ],
      sessions: [
        {
          title: 'เวที KM และสรุปองค์ความรู้',
          date: '7 เมษายน 2569',
          place: 'ห้องประชุมแม่ริม อาคารอำนวยการและบริหารกลาง มหาวิทยาลัยราชภัฏเชียงใหม่ ศูนย์แม่ริม',
          speaker: 'เครือข่ายเกษตรกรต้นแบบและหน่วยงานสนับสนุน'
        },
        {
          title: 'พิธีมอบใบรับรอง',
          date: '7 เมษายน 2569',
          place: 'ภายในกิจกรรม KM',
          speaker: 'ปศุสัตว์จังหวัดเชียงใหม่'
        },
        {
          title: 'ศึกษาดูงานฟาร์มต้นแบบ',
          date: '7 เมษายน 2569',
          place: 'ฟาร์มต้นแบบ อำเภอแม่ริม จังหวัดเชียงใหม่',
          speaker: 'เกษตรกรต้นแบบและคณะทำงานโครงการ'
        }
      ],
      gallery: buildGallery(100, 109, [])
    }
  ];

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderTrainingCards(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;
    container.innerHTML = seminars.map(function(item){
      return `
        <div class="col-lg-6 col-sm-6 seminar-card-wrap">
          <div class="item seminar-card seminar-training-card" data-topic="${escapeHtml(item.topic)}" data-level="${escapeHtml(item.level)}">
            <div class="image">
              <img src="${escapeHtml(item.cardImage)}" alt="${escapeHtml(item.title)}" loading="lazy">
            </div>
            <div class="content">
              <span class="info">${escapeHtml(item.badge)}</span>
              <h4>${escapeHtml(item.title)}</h4>
              <div class="meta-row">
                <span><i class="fa fa-clock"></i> ${escapeHtml(item.dateLabel)}</span>
                <span><i class="fa fa-map-marker"></i> ${escapeHtml(item.placeLabel)}</span>
              </div>
              <p>${escapeHtml(item.summary)}</p>
              <div class="filter-labels mt-2">
                <span class="badge bg-success">${escapeHtml(item.topicLabel)}</span>
                <span class="badge bg-secondary">${escapeHtml(item.levelLabel)}</span>
              </div>
              <div class="main-button mt-3">
                <a class="btn-compact" href="${escapeHtml(item.page)}">ดูภาพและรายละเอียด</a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderDetailPage() {
    const root = document.getElementById('seminar-detail-root');
    const seminarId = window.SEMINAR_PAGE_ID;
    if (!root || !seminarId) return;
    const item = seminars.find(function(entry){ return entry.id === seminarId; });
    if (!item) {
      root.innerHTML = '<div class="container"><p>ไม่พบข้อมูลการอบรม</p></div>';
      return;
    }
    root.innerHTML = `
      <section class="seminar-detail-shell">
        <div class="container">
          <a class="seminar-back-link mb-4" href="learning-center.html"><i class="fa fa-arrow-left"></i> กลับไปหน้าการเรียนรู้</a>
          <div class="seminar-hero-card mb-4">
            <span class="hero-chip"><i class="fa fa-graduation-cap"></i> ${escapeHtml(item.badge)}</span>
            <h1>${escapeHtml(item.title)}</h1>
            <p style="margin:0;line-height:1.9;">${escapeHtml(item.intro)}</p>
            <div class="seminar-meta-row">
              <span><i class="fa fa-clock"></i> ${escapeHtml(item.dateLabel)}</span>
              <span><i class="fa fa-map-marker"></i> ${escapeHtml(item.placeLabel)}</span>
              <span><i class="fa fa-folder-open"></i> ${escapeHtml(item.topicLabel)}</span>
            </div>
          </div>

          <div class="row g-4">
            <div class="col-lg-5">
              <div class="seminar-summary-card h-100">
                <span class="summary-chip"><i class="fa fa-lightbulb-o"></i> ประเด็นสำคัญ</span>
                <p class="mt-3">${escapeHtml(item.summary)}</p>
                <ul>
                  ${item.highlights.map(function(point){ return `<li>${escapeHtml(point)}</li>`; }).join('')}
                </ul>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="seminar-gallery-card h-100">
                <span class="summary-chip"><i class="fa fa-image"></i> ภาพกิจกรรมเด่น</span>
                <div class="seminar-gallery-item mt-3">
                  <img src="${escapeHtml(item.cardImage)}" alt="${escapeHtml(item.title)}">
                  <span>${escapeHtml(item.title)}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="seminar-gallery-card mt-4">
            <span class="summary-chip"><i class="fa fa-calendar-check-o"></i> รอบการอบรมในเอกสาร</span>
            <div class="seminar-session-grid mt-3">
              ${item.sessions.map(function(session){
                return `
                  <div class="seminar-session-card">
                    <h5>${escapeHtml(session.title)}</h5>
                    <p><strong>วันอบรม:</strong> ${escapeHtml(session.date)}</p>
                    <p><strong>สถานที่:</strong> ${escapeHtml(session.place)}</p>
                    <p><strong>วิทยากร:</strong> ${escapeHtml(session.speaker)}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="seminar-gallery-card mt-4">
            <span class="summary-chip"><i class="fa fa-camera"></i> ภาพกิจกรรมจากเอกสารการอบรม</span>
            <div class="seminar-gallery-grid mt-3">
              ${item.gallery.map(function(image, index){
                return `
                  <div class="seminar-gallery-item">
                    <img src="${escapeHtml(image)}" alt="${escapeHtml(item.title)} ภาพที่ ${index + 1}" loading="lazy">
                    <span>ภาพกิจกรรมที่ ${index + 1}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </section>
    `;
    document.title = `${item.title} - ฟาร์มหมูหลุม`;
  }

  window.SEMINAR_DETAILS = seminars;
  window.renderSeminarTrainingCards = renderTrainingCards;

  document.addEventListener('DOMContentLoaded', function(){
    renderDetailPage();
  });
})();
