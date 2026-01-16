import { Content } from './types';

export const content: Record<string, Content> = {
  vi: {
    nav: {
      home: "Trang Chủ",
      about: "Về Chúng Tôi",
      services: "Dịch Vụ",
      portfolio: "Dự Án",
      contact: "Liên Hệ",
    },
    home: {
      hero: {
        slogan: "Nhà Cung Cấp Giải Pháp Cho Nền Kinh Tế Mới",
        sub: "Hơn 20 năm kinh nghiệm đồng hành cùng sự phát triển của doanh nghiệp Việt Nam và Quốc tế.",
        cta: "Tư Vấn Ngay",
      },
      values: {
        title: "Giá Trị Cốt Lõi",
        items: [
          { title: "Kinh Nghiệm", desc: "Thành lập từ 2001 với đội ngũ chuyên gia dày dặn kinh nghiệm." },
          { title: "Giải Pháp Thực Tiễn", desc: "Tối ưu hóa quy trình, tập trung vào hiệu quả thực tế." },
          { title: "An Toàn & Ổn Định", desc: "Bảo mật dữ liệu và vận hành hệ thống bền vững là ưu tiên hàng đầu." },
          { title: "Đối Tác Lâu Dài", desc: "Đồng hành cùng sự phát triển bền vững của khách hàng." },
        ],
      },
    },
    about: {
      title: "Về SGC",
      history: "Được thành lập vào tháng 4 năm 2001, SGC Co., Ltd đã khẳng định vị thế là một trong những đơn vị tiên phong trong lĩnh vực công nghệ thông tin tại Việt Nam. Chúng tôi tự hào mang đến các giải pháp chuyển đổi số toàn diện cho hàng nghìn doanh nghiệp SME.",
      infoTitle: "Thông Tin Doanh Nghiệp",
      taxCode: "Mã số thuế: 0302298015",
      mission: "Sứ mệnh của chúng tôi là trở thành đối tác công nghệ tin cậy, giúp doanh nghiệp tối ưu hóa vận hành và bứt phá trong kỷ nguyên số.",
    },
    services: {
      title: "Dịch Vụ Của Chúng Tôi",
      subtitle: "Giải pháp công nghệ toàn diện cho doanh nghiệp hiện đại",
      list: [
        { id: "web", title: "Giải Pháp Website WordPress", description: "Thiết kế tùy chỉnh, bảo mật cao, tối ưu SEO và dịch vụ khôi phục dữ liệu.", iconName: "Globe" },
        { id: "email", title: "Email Doanh Nghiệp", description: "Google Workspace, cPanel và giải pháp Hybrid Email chuyên nghiệp.", iconName: "Mail" },
        { id: "ai", title: "Chuyên Gia AI (Google Gemini)", description: "Thiết lập AI tùy chỉnh cho vận hành doanh nghiệp và marketing tự động.", iconName: "Bot" },
        { id: "landing", title: "Mini Website & Landing Page", description: "Trang tĩnh dưới 7 trang, tối ưu cho startup và chiến dịch quảng cáo.", iconName: "Layout" },
        { id: "app", title: "Mini App / Phát Triển MVP", description: "Xây dựng sản phẩm khả thi tối thiểu để kiểm thử ý tưởng nhanh chóng.", iconName: "Smartphone" },
        { id: "qr", title: "Dịch Vụ Mã QR", description: "Nền tảng SaaS với 18 loại mã QR (URL, vCard, Menu, Wifi...).", iconName: "QrCode" },
        { id: "domain", title: "Tên Miền & DNS", description: "Đăng ký và quản lý tên miền .vn và quốc tế uy tín.", iconName: "Server" },
        { id: "other", title: "Dịch Vụ Khác", description: "AI Video (ITVC), Form trực tuyến tùy chỉnh và Chatbot AI 24/7.", iconName: "MoreHorizontal" },
      ],
    },
    portfolio: {
      title: "Dự Án Tiêu Biểu",
      subtitle: "Minh chứng cho năng lực kỹ thuật và sự sáng tạo của SGC",
      items: [
        { id: 1, title: "E-commerce Platform VN", category: "Web Development", imageUrl: "https://picsum.photos/600/400?random=1" },
        { id: 2, title: "FinTech App MVP", category: "Mobile App", imageUrl: "https://picsum.photos/600/400?random=2" },
        { id: 3, title: "AI Customer Support", category: "AI Solutions", imageUrl: "https://picsum.photos/600/400?random=3" },
        { id: 4, title: "EduTech Landing Page", category: "Web Design", imageUrl: "https://picsum.photos/600/400?random=4" },
        { id: 5, title: "Logistics Dashboard", category: "SaaS", imageUrl: "https://picsum.photos/600/400?random=5" },
        { id: 6, title: "Real Estate VR Tour", category: "Digital Transformation", imageUrl: "https://picsum.photos/600/400?random=6" },
      ],
    },
    contact: {
      title: "Liên Hệ Tư Vấn",
      subtitle: "Để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ lại trong vòng 24h.",
      form: {
        name: "Họ và tên",
        email: "Email doanh nghiệp",
        phone: "Số điện thoại",
        service: "Dịch vụ quan tâm",
        message: "Nội dung cần tư vấn",
        submit: "Gửi Yêu Cầu",
        success: "Cảm ơn bạn! Chúng tôi đã nhận được yêu cầu.",
      },
      info: {
        address: "Văn phòng giao dịch: Quận 1, TP. Hồ Chí Minh",
        hotline: "0833 246 247",
        email: "info@sgc.vn",
        office: "Trụ sở chính",
      },
    },
    footer: {
      rights: "© 2001 - 2024 SGC Co., Ltd. Bảo lưu mọi quyền.",
      quickLinks: "Liên kết nhanh",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    home: {
      hero: {
        slogan: "The Solutions Provider for the New Economy",
        sub: "Over 20 years of experience accompanying the growth of Vietnamese and International enterprises.",
        cta: "Get Consultation",
      },
      values: {
        title: "Core Values",
        items: [
          { title: "Experience", desc: "Established in 2001 with a team of seasoned experts." },
          { title: "Practical Solutions", desc: "Optimizing processes with a focus on real-world efficiency." },
          { title: "Security & Stability", desc: "Data security and stable system operations are top priorities." },
          { title: "Long-term Partnership", desc: "Accompanying the sustainable growth of our clients." },
        ],
      },
    },
    about: {
      title: "About SGC",
      history: "Established in April 2001, SGC Co., Ltd has affirmed its position as one of the pioneers in the IT sector in Vietnam. We are proud to provide comprehensive digital transformation solutions for thousands of SMEs.",
      infoTitle: "Business Information",
      taxCode: "Tax Code: 0302298015",
      mission: "Our mission is to be a trusted technology partner, helping businesses optimize operations and breakthrough in the digital era.",
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive technology solutions for modern businesses",
      list: [
        { id: "web", title: "WordPress Solutions", description: "Custom design, high security, SEO optimization, and data recovery services.", iconName: "Globe" },
        { id: "email", title: "Professional Email", description: "Google Workspace, cPanel, and professional Hybrid Email solutions.", iconName: "Mail" },
        { id: "ai", title: "AI Experts (Google Gemini)", description: "Custom AI setup for business operations and automated marketing.", iconName: "Bot" },
        { id: "landing", title: "Mini Web & Landing Page", description: "Static sites under 7 pages, optimized for startups and campaigns.", iconName: "Layout" },
        { id: "app", title: "Mini App / MVP Dev", description: "Building Minimum Viable Products for rapid idea testing.", iconName: "Smartphone" },
        { id: "qr", title: "QR Code Services", description: "SaaS platform with 18 types of QR codes (URL, vCard, Menu, Wifi...).", iconName: "QrCode" },
        { id: "domain", title: "Domain & DNS", description: "Registration and management of trusted .vn and international domains.", iconName: "Server" },
        { id: "other", title: "Other Services", description: "AI Video (ITVC), Custom Online Forms, and 24/7/365 AI Chatbots.", iconName: "MoreHorizontal" },
      ],
    },
    portfolio: {
      title: "Featured Projects",
      subtitle: "A testament to SGC's technical expertise and creativity",
      items: [
        { id: 1, title: "E-commerce Platform VN", category: "Web Development", imageUrl: "https://picsum.photos/600/400?random=1" },
        { id: 2, title: "FinTech App MVP", category: "Mobile App", imageUrl: "https://picsum.photos/600/400?random=2" },
        { id: 3, title: "AI Customer Support", category: "AI Solutions", imageUrl: "https://picsum.photos/600/400?random=3" },
        { id: 4, title: "EduTech Landing Page", category: "Web Design", imageUrl: "https://picsum.photos/600/400?random=4" },
        { id: 5, title: "Logistics Dashboard", category: "SaaS", imageUrl: "https://picsum.photos/600/400?random=5" },
        { id: 6, title: "Real Estate VR Tour", category: "Digital Transformation", imageUrl: "https://picsum.photos/600/400?random=6" },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Leave your information, our experts will contact you within 24 hours.",
      form: {
        name: "Full Name",
        email: "Business Email",
        phone: "Phone Number",
        service: "Service of Interest",
        message: "Message",
        submit: "Send Request",
        success: "Thank you! We have received your request.",
      },
      info: {
        address: "Transaction Office: District 1, HCMC",
        hotline: "0833 246 247",
        email: "info@sgc.vn",
        office: "Head Office",
      },
    },
    footer: {
      rights: "© 2001 - 2024 SGC Co., Ltd. All rights reserved.",
      quickLinks: "Quick Links",
    },
  },
};