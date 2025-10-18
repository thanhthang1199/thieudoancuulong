# 📸 Hướng dẫn sử dụng ảnh cho website

## 📁 Cấu trúc thư mục images

```
images/
├── header-toathanh.jpg    # Ảnh nền chính cho hero section
├── lichtrinh.jpg          # Ảnh lịch trình hoạt động
├── thank-you-bg.jpg       # Ảnh nền cho section Thank you
├── camp-activity-1.jpg    # Ảnh hoạt động trại hè (tùy chọn)
├── camp-activity-2.jpg    # Ảnh hoạt động trại hè (tùy chọn)
├── camp-activity-3.jpg    # Ảnh hoạt động trại hè (tùy chọn)
└── README.md             # File hướng dẫn này
```

## 🖼️ Yêu cầu ảnh header.jpg (Hero Background)

### Kích thước khuyến nghị:
- **Tỷ lệ**: 16:9 hoặc 21:9 (landscape)
- **Độ phân giải tối thiểu**: 1920x1080px (Full HD)
- **Độ phân giải khuyến nghị**: 2560x1440px (2K) hoặc 3840x2160px (4K)
- **Kích thước file**: Dưới 2MB để tối ưu tốc độ tải

### Nội dung ảnh:
- **Chủ đề**: Trại hè, thiếu niên, hoạt động ngoài trời
- **Màu sắc**: Tươi sáng, vui tươi, phù hợp với lứa tuổi thiếu niên
- **Gợi ý**: Cắm trại, leo núi, team building, hoạt động nhóm

### Định dạng file:
- **Khuyến nghị**: JPG (kích thước nhỏ, chất lượng tốt)
- **Tùy chọn**: WebP (kích thước nhỏ hơn, hỗ trợ hiện đại)
- **Tránh**: PNG (kích thước lớn), GIF (chất lượng thấp)

## 📅 Yêu cầu ảnh schedule.jpg (Lịch trình)

### Kích thước khuyến nghị:
- **Tỷ lệ**: 4:3 hoặc 16:9 (landscape)
- **Độ phân giải tối thiểu**: 1200x900px
- **Độ phân giải khuyến nghị**: 1600x1200px hoặc 1920x1080px
- **Kích thước file**: Dưới 1.5MB để tối ưu tốc độ tải

### Nội dung ảnh:
- **Chủ đề**: Lịch trình hoạt động chi tiết
- **Thiết kế**: Timeline, bảng lịch trình, infographic
- **Màu sắc**: Tương thích với theme website (xanh, cam, trắng)
- **Font chữ**: Rõ ràng, dễ đọc trên mọi thiết bị

### Gợi ý thiết kế:
- **Timeline dọc**: Các hoạt động theo thứ tự thời gian
- **Bảng lịch trình**: Thời gian | Hoạt động | Ghi chú
- **Infographic**: Kết hợp icon, màu sắc và text
- **Layout responsive**: Dễ đọc trên mobile

### Định dạng file:
- **Khuyến nghị**: JPG (kích thước nhỏ, chất lượng tốt)
- **Tùy chọn**: PNG (nếu có text cần độ nét cao)
- **Tránh**: PDF (không hiển thị trực tiếp)

## 🙏 Yêu cầu ảnh thank-you-bg.jpg (Thank You Background)

### Kích thước khuyến nghị:
- **Tỷ lệ**: 16:9 hoặc 21:9 (landscape)
- **Độ phân giải tối thiểu**: 1920x1080px (Full HD)
- **Độ phân giải khuyến nghị**: 2560x1440px (2K) hoặc 3840x2160px (4K)
- **Kích thước file**: Dưới 1.5MB để tối ưu tốc độ tải

### Nội dung ảnh:
- **Chủ đề**: Tôn giáo, tâm linh, cảm ơn, kết thúc
- **Màu sắc**: Tối, trang trọng, phù hợp với text trắng
- **Gợi ý**: Tòa Thánh, đền chùa, hoàng hôn, ánh sáng tâm linh
- **Tone**: Trang trọng, cảm động, kết thúc đẹp

### Định dạng file:
- **Khuyến nghị**: JPG (kích thước nhỏ, chất lượng tốt)
- **Tùy chọn**: WebP (kích thước nhỏ hơn, hỗ trợ hiện đại)
- **Tránh**: PNG (kích thước lớn), GIF (chất lượng thấp)

## 🎨 Cách tối ưu ảnh

### 1. Nén ảnh trước khi upload:
- Sử dụng tools: TinyPNG, Compressor.io, hoặc Photoshop
- Mục tiêu: Giảm kích thước file mà vẫn giữ chất lượng tốt

### 2. Tạo nhiều phiên bản:
- `hero-background.jpg` - Phiên bản gốc (2K-4K)
- `hero-background-mobile.jpg` - Phiên bản cho mobile (1080px)
- `hero-background-tablet.jpg` - Phiên bản cho tablet (1440px)

### 3. Responsive images (tùy chọn):
```css
/* Desktop */
.hero {
    background-image: url('./images/hero-background.jpg');
}

/* Tablet */
@media (max-width: 1024px) {
    .hero {
        background-image: url('./images/hero-background-tablet.jpg');
    }
}

/* Mobile */
@media (max-width: 768px) {
    .hero {
        background-image: url('./images/hero-background-mobile.jpg');
    }
}
```

## 📱 Tối ưu cho mobile

### Kích thước ảnh cho mobile:
- **Width**: 1080px
- **Height**: 607px (tỷ lệ 16:9)
- **File size**: Dưới 500KB

### Lưu ý:
- Ảnh sẽ được crop theo tỷ lệ màn hình
- Phần quan trọng nên ở giữa ảnh
- Tránh text hoặc chi tiết quan trọng ở các góc

## 🔧 Cách thay đổi ảnh

### 1. Thay thế ảnh hiện tại:
- **Header**: Xóa `header-toathanh.jpg` cũ, đặt ảnh mới với tên `header-toathanh.jpg`
- **Schedule**: Xóa `lichtrinh.jpg` cũ, đặt ảnh mới với tên `lichtrinh.jpg`
- **Thank You**: Xóa `thank-you-bg.jpg` cũ, đặt ảnh mới với tên `thank-you-bg.jpg`
- Đảm bảo tên file chính xác và đặt vào folder `images/`

### 2. Thêm ảnh mới:
- Đặt ảnh vào folder `images/`
- Cập nhật đường dẫn trong `styles.css` nếu cần

### 3. Kiểm tra:
- Mở `index.html` trong trình duyệt
- Kiểm tra ảnh hiển thị đúng
- Test trên mobile và desktop

## 🎯 Gợi ý nguồn ảnh

### Miễn phí:
- **Unsplash**: unsplash.com (chất lượng cao, miễn phí)
- **Pexels**: pexels.com (ảnh và video miễn phí)
- **Pixabay**: pixabay.com (ảnh vector và ảnh chụp)

### Từ khóa tìm kiếm:
- "summer camp teenagers"
- "outdoor activities kids"
- "team building activities"
- "camping adventure"
- "youth group activities"

## ⚠️ Lưu ý quan trọng

1. **Bản quyền**: Chỉ sử dụng ảnh có bản quyền phù hợp
2. **Tối ưu**: Luôn nén ảnh trước khi sử dụng
3. **Backup**: Giữ bản gốc ảnh chất lượng cao
4. **Test**: Kiểm tra trên nhiều thiết bị khác nhau

## 📞 Hỗ trợ

Nếu cần hỗ trợ về ảnh hoặc có câu hỏi, vui lòng liên hệ:
- Email: info@traihethieunien.com
- Hotline: 0123 456 789
