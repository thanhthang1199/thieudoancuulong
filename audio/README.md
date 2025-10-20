# 🎵 Hướng dẫn sử dụng âm thanh cho website

## 📁 Cấu trúc thư mục audio

```
audio/
├── background-music.mp3    # File nhạc nền chính (MP3)
├── background-music.ogg    # File nhạc nền phụ (OGG - tùy chọn)
└── README.md              # File hướng dẫn này
```

## 🎶 Yêu cầu file âm thanh

### Định dạng file:
- **MP3**: `background-music.mp3` (bắt buộc)
- **OGG**: `background-music.ogg` (tùy chọn, để hỗ trợ Firefox)

### Kích thước file:
- **Khuyến nghị**: Dưới 2MB để tối ưu tốc độ tải
- **Độ dài**: 2-5 phút (sẽ loop tự động)
- **Bitrate**: 128kbps - 192kbps

### Nội dung nhạc:
- **Chủ đề**: Tôn giáo, tâm linh, nhẹ nhàng
- **Thể loại**: Nhạc nền, ambient, classical
- **Gợi ý**: 
  - Nhạc thiền, tâm linh
  - Nhạc cổ điển nhẹ nhàng
  - Âm thanh thiên nhiên
  - Nhạc truyền thống Việt Nam

## 🎛️ Tính năng âm thanh

### Tự động phát:
- **Autoplay**: Nhạc sẽ tự động phát khi vào website
- **Loop**: Nhạc sẽ lặp lại liên tục
- **Volume**: Âm lượng mặc định 50%

### Điều khiển:
- **Nút điều khiển**: Góc trái trên màn hình
- **Click để tắt/bật**: Người dùng có thể điều khiển
- **Icon thay đổi**: 🎵 (đang phát) / 🔇 (đã tắt)

### Responsive:
- **Desktop**: Nút 60x60px ở góc trái
- **Mobile**: Nút vẫn hiển thị và hoạt động tốt
- **Hover effect**: Scale và shadow khi hover

## 🔧 Cách thêm âm thanh

### 1. Chuẩn bị file âm thanh:
- Tìm hoặc tạo file nhạc phù hợp
- Chuyển đổi sang định dạng MP3
- Nén file để giảm kích thước

### 2. Upload file:
- Đặt file `background-music.mp3` vào folder `audio/`
- (Tùy chọn) Thêm file `background-music.ogg` để hỗ trợ Firefox

### 3. Kiểm tra:
- Mở website trong trình duyệt
- Nhạc sẽ tự động phát (nếu browser cho phép)
- Click nút điều khiển để test tắt/bật

## ⚠️ Lưu ý quan trọng

### Autoplay Policy:
- **Chrome/Safari**: Có thể chặn autoplay nếu không có user interaction
- **Firefox**: Thường chặn autoplay có âm thanh
- **Mobile**: Hầu hết browser chặn autoplay

### Giải pháp:
- Nút điều khiển cho phép user bật nhạc thủ công
- Icon sẽ hiển thị 🔇 nếu autoplay bị chặn
- User có thể click để bật nhạc

### Performance:
- File âm thanh lớn sẽ làm chậm website
- Nên sử dụng file MP3 được nén tốt
- Test trên các thiết bị khác nhau

## 🎨 Customization

### Thay đổi âm lượng:
```javascript
// Trong script.js, dòng 8
audio.volume = 0.3; // 30% thay vì 50%
```

### Thay đổi vị trí nút:
```css
/* Trong styles.css */
.music-control {
    top: 20px;    /* Khoảng cách từ trên */
    left: 20px;   /* Khoảng cách từ trái */
}
```

### Thay đổi kích thước nút:
```css
.music-btn {
    width: 50px;   /* Thay vì 60px */
    height: 50px;  /* Thay vì 60px */
}
```

## 📞 Hỗ trợ

Nếu cần hỗ trợ về âm thanh hoặc có câu hỏi:
- Email: info@traihethieunien.com
- Hotline: 0397.840.415
