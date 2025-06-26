


// questions.js
// Bộ câu hỏi trắc nghiệm về Mạng máy tính & Linux

const questions = [
    {
        numb: 1,
        question: "Máy in kết nối với máy tính dùng cáp UTP CAT5 bấm cáp như thế nào?",
        answer: "Bấm thẳng",
        options: [
            "Bấm chéo",
            "Bấm thẳng",
            "Bấm song song",
            "Không cần bấm cáp"
        ]
    },
    {
        numb: 2,
        question: "Cáp mạng là thiết bị hoạt động ở tầng nào của OSI?",
        answer: "Tầng vật lý",
        options: [
            "Tầng mạng",
            "Tầng vật lý",
            "Tầng ứng dụng",
            "Tầng liên kết dữ liệu"
        ]
    },
    {
        numb: 3,
        question: "Định nghĩa địa chỉ IP được thực hiện tại tầng nào?",
        answer: "Tầng mạng",
        options: [
            "Tầng vật lý",
            "Tầng giao vận",
            "Tầng mạng",
            "Tầng trình diễn"
        ]
    },
    {
        numb: 4,
        question: "Cáp quang có ưu điểm gì?",
        answer: "Chống nhiễu, truyền xa hơn, chống nghe trộm",
        options: [
            "Giá thành rẻ, dễ lắp đặt",
            "Chỉ dùng cho mạng không dây",
            "Tốc độ thấp nhưng rất ổn định",
            "Chống nhiễu, truyền xa hơn, chống nghe trộm"
        ]
    },
    {
        numb: 5,
        question: "Để kết nối PC với PC dùng cáp UTP thì bấm cáp như thế nào?",
        answer: "Bấm cáp chéo",
        options: [
            "Bấm cáp thẳng",
            "Bấm cáp chéo",
            "Bấm cáp cuộn",
            "Dùng cáp quang"
        ]
    },
    {
        numb: 6,
        question: "Thiết bị cơ bản của mạng không dây là gì?",
        answer: "Card mạng",
        options: [
            "Hub",
            "Switch",
            "Card mạng",
            "Cục router"
        ]
    },
    {
        numb: 7,
        question: "Mạng không dây được kết nối bằng gì?",
        answer: "Wi-Fi", // Sửa lại câu trả lời cho chính xác hơn, Wi-Fi là phương thức kết nối phổ biến, Bluetooth cũng có nhưng ít dùng cho mạng diện rộng.
        options: [
            "Bluetooth",
            "Wi-Fi",
            "Cáp đồng trục",
            "Hồng ngoại"
        ]
    },
    {
        numb: 8,
        question: "Những lợi ích sau, Lợi ích nào không phải của mạng không dây?",
        answer: "Tốc độ cao như mạng có dây",
        options: [
            "Linh hoạt, dễ di chuyển",
            "Tốc độ cao như mạng có dây",
            "Dễ dàng mở rộng",
            "Tiện lợi cho các thiết bị di động"
        ]
    },
    {
        numb: 9,
        question: "Kiểu antenna của wireless LAN là?",
        answer: "Yagi",
        options: [
            "Yagi",
            "Router",
            "Switch",
            "Hub"
        ]
    },
    {
        numb: 10,
        question: "Cơ chế lọc địa chỉ MAC thực hiện việc bảo mật trong Wireless LAN như thế nào?",
        answer: "Wireless router thực hiện lọc địa chỉ MAC, bỏ qua yêu cầu kiểm tra ISP",
        options: [
            "Mã hóa tất cả dữ liệu truyền đi",
            "Wireless router thực hiện lọc địa chỉ MAC, bỏ qua yêu cầu kiểm tra ISP",
            "Yêu cầu ISP kiểm tra",
            "Thay đổi địa chỉ IP liên tục"
        ]
    },
    {
        numb: 11,
        question: "Những ưu điểm sau, ưu điểm nào không phải của mạng không dây?",
        answer: "Bảo mật tuyệt đối", // Sửa lại câu trả lời cho hợp lý hơn
        options: [
            "Không cần dây cáp",
            "Bảo mật tuyệt đối",
            "Tốc độ luôn cao hơn mạng có dây",
            "Không bao giờ bị nhiễu sóng"
        ]
    },
    {
        numb: 12,
        question: "Khi cài hệ điều hành window server 2019 chỉ ra một điểm khác biệt so với window 10?",
        answer: "Thiết lập bản quyền truy cập",
        options: [
            "Giao diện đồ họa đẹp hơn",
            "Thiết lập bản quyền truy cập",
            "Khả năng chơi game tốt hơn",
            "Có nhiều ứng dụng văn phòng hơn"
        ]
    },
    {
        numb: 13,
        question: "Dịch vụ DNS(DOMAIN NAME SYSTEM - Hệ thống tên miền) là hệ thống cho phép thiết lập tương ứng?",
        answer: "Hệ thống cho phép phân giải tên miền thành địa chỉ và ngược lại",
        options: [
            "Dịch vụ cấp phát địa chỉ IP động",
            "Hệ thống cho phép phân giải tên miền thành địa chỉ và ngược lại",
            "Giao thức truyền tải siêu văn bản",
            "Dịch vụ tường lửa bảo vệ mạng"
        ]
    },
    {
        numb: 14,
        question: "Khi 1 máy kết nối với hệ thống mạng có DHCP Server, dùng lệnh gì để kiểm tra IP?",
        answer: "IPCONFIG",
        options: [
            "ping",
            "tracert",
            "netstat",
            "IPCONFIG"
        ]
    },
    {
        numb: 15,
        question: "Biện pháp bảo vệ dữ liệu trên mạng đúng nhất là gì?",
        answer: "Phân quyền và cài đặt password",
        options: [
            "Luôn tắt máy tính khi không sử dụng",
            "Phân quyền và cài đặt password",
            "Chỉ sử dụng mạng có dây",
            "Xóa lịch sử duyệt web thường xuyên"
        ]
    },
    {
        numb: 16,
        question: "Router là 1 thiết bị dùng để làm gì?",
        answer: "Định tuyến giữa các mạng",
        options: [
            "Chia sẻ tín hiệu cho nhiều máy trong cùng một mạng",
            "Tăng tốc độ kết nối Internet",
            "Định tuyến giữa các mạng",
            "Chỉ dùng để phát sóng Wi-Fi"
        ]
    },
    {
        numb: 17,
        question: "Chức năng chính của Router trong mạng máy tính là gì?",
        answer: "Kết nối các mạng khác nhau",
        options: [
            "Kết nối các máy tính trong cùng một mạng LAN",
            "Làm máy chủ lưu trữ dữ liệu",
            "Quét và diệt virus",
            "Kết nối các mạng khác nhau"
        ]
    },
    {
        numb: 18,
        question: "Giao thức DHCP cấp gì cho các trạm Client?",
        answer: "Cấp địa chỉ IP",
        options: [
            "Cấp địa chỉ IP",
            "Cấp tên miền (Domain Name)",
            "Cấp địa chỉ MAC",
            "Cấp quyền truy cập thư mục"
        ]
    },
    {
        numb: 19,
        question: "Dịch vụ nào tham chiếu host bằng tên thay cho việc dùng địa chỉ IP khi duyệt Internet?",
        answer: "DNS",
        options: [
            "DHCP",
            "FTP",
            "DNS",
            "SMTP"
        ]
    },
    {
        numb: 20,
        question: "Để truyền tải được tập tin, giao thức FTP sử dụng dịch vụ ở cổng số mấy?",
        answer: "21",
        options: [
            "80",
            "25",
            "21",
            "110"
        ]
    },
    {
        numb: 21,
        question: "Giao thức SMTP dùng cổng dịch vụ nào để gửi mail?",
        answer: "25",
        options: [
            "110",
            "25",
            "143",
            "80"
        ]
    },
    {
        numb: 22,
        question: "Để kết nối với mail server và tải xuống máy tính giao thức pop3 sử dụng cổng số mấy?",
        answer: "110",
        options: [
            "110",
            "25",
            "443",
            "8080"
        ]
    },
    {
        numb: 23,
        question: "Mỗi hệ điều hành được chạy trên một máy ảo được gọi là?",
        answer: "Guest operating system",
        options: [
            "Host operating system (Hệ điều hành chủ)",
            "Guest operating system",
            "Virtual operating system",
            "Embedded operating system"
        ]
    },
    {
        numb: 24,
        question: "IPv6 có không gian địa chỉ là bao nhiêu?",
        answer: "128 bit",
        options: [
            "32 bit",
            "64 bit",
            "128 bit",
            "256 bit"
        ]
    },
    {
        numb: 25,
        question: "Gói tin IPv6 có bao nhiêu byte trong phần tiêu đề?",
        answer: "40 bytes",
        options: [
            "20 bytes",
            "30 bytes",
            "40 bytes",
            "60 bytes"
        ]
    },
    {
        numb: 26,
        question: "Quá trình di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào?",
        answer: "Đóng gói",
        options: [
            "Phân giải tên miền",
            "Đóng gói",
            "Định tuyến gói tin",
            "Mã hóa dữ liệu"
        ]
    },
    {
        numb: 27,
        question: "Kết nối kiểu mạng MAN, LAN, WAN độc lập với nhau bằng các thiết bị có chức năng gì?",
        answer: "Định tuyến",
        options: [
            "Chuyển mạch (Switching)",
            "Lặp lại tín hiệu (Repeating)",
            "Định tuyến",
            "Tập trung (Hub)"
        ]
    },
    {
        numb: 28,
        question: "Mạng Internet là sự phát triển của?",
        answer: "Mạng Lan, wan và Intranet",
        options: [
            "Một tên gọi khác của mạng Internet toàn cầu",
            "Mạng Lan, wan và Intranet",
            "Mạng kết nối giữa các Intranet",
            "Mạng không dây công cộng"
        ]
    },
    {
        numb: 29,
        question: "Chức năng của tầng Network trong OSI là gì?",
        answer: "Định tuyến đường truyền",
        options: [
            "Kiểm soát lỗi và luồng dữ liệu",
            "Cung cấp giao diện cho người dùng",
            "Mã hóa và nén dữ liệu",
            "Định tuyến đường truyền"
        ]
    },
    {
        numb: 30,
        question: "Wireless access point thuộc tầng nào của OSI?",
        answer: "Data link",
        options: [
            "Physical",
            "Data link",
            "Network",
            "Application"
        ]
    },
    {
        numb: 31,
        question: "Công nghệ mạng Lan được sử phổ biến hiện nay?",
        answer: "Ethernet",
        options: [
            "Token Ring",
            "FDDI",
            "Ethernet",
            "ATM"
        ]
    },
    {
        numb: 32,
        question: "Công nghệ Hyper-Threading được phát triển cho thiết bị nào sau đây?",
        answer: "Processor",
        options: [
            "RAM",
            "Card đồ họa (GPU)",
            "Ổ cứng (HDD/SSD)",
            "Processor"
        ]
    },
    {
        numb: 33,
        question: "VLAN là kỹ thuật viết tắt của cụm từ nào sau đây?",
        answer: "Virtual Local Area Network",
        options: [
            "Very Large Area Network",
            "Virtual Local Area Network",
            "Variable Local Area Number",
            "Virtual LAN Access Node"
        ]
    },
    {
        numb: 34,
        question: "Ưu điểm của mạng LAN ảo (VLAN) là gì?",
        answer: "Cho phép phân hoạch và cấu hình mạng",
        options: [
            "Tăng tốc độ truy cập Internet",
            "Giảm chi phí mua thiết bị mạng",
            "Cho phép phân hoạch và cấu hình mạng",
            "Không cần sử dụng Switch"
        ]
    },
    {
        numb: 35,
        question: "Theo SV Data Center, có chia sẻ thư mục Software, lệnh để ánh xạ thư mục thực hiện ở đĩa ':X/cục bộ' trên máy là?",
        answer: "Net use X: \\\\datacenter\\Software",
        options: [
            "map X: \\\\datacenter\\Software",
            "Net use X: \\\\datacenter\\Software",
            "assign X: \\\\datacenter\\Software",
            "link X: \\\\datacenter\\Software"
        ]
    },
    {
        numb: 36,
        question: "Kiểu truyền thông multicast trong mô hình điểm - nhiều điểm là kiểu truyền thông mà?",
        answer: "Một nhóm thiết bị nhận được thông điệp",
        options: [
            "Unicast",
            "Broadcast",
            "Một nhóm thiết bị nhận được thông điệp",
            "Anycast"
        ]
    },
    {
        numb: 37,
        question: "Các chức năng trình bày (Presentation) trong mô hình OSI là gì?",
        answer: "Mã hóa dữ liệu",
        options: [
            "Thiết lập, quản lý và chấm dứt phiên làm việc",
            "Định tuyến gói tin",
            "Mã hóa dữ liệu",
            "Kiểm soát lỗi và luồng dữ liệu"
        ]
    },
    {
        numb: 38,
        question: "Giao thức protocol trong hệ thống mạng?",
        answer: "là các quy tắc cho phép các máy tính cá thể có thể giao tiếp với nhau",
        options: [
            "Phần cứng (Hardware)",
            "Phần mềm (Software)",
            "là các quy tắc cho phép các máy tính cá thể có thể giao tiếp với nhau",
            "Hệ điều hành (Operating System)"
        ]
    },
    {
        numb: 39,
        question: "Hệ thống mạng Client/Server muốn hoạt động hiệu quả người ta thường?",
        answer: "Tổng số lượng Collision Domain, giảm kích thước Collision Domain", // Câu hỏi và đáp án này hơi khó hiểu, có thể cần xem lại.
        options: [
            "Broadcast Domain (Miền quảng bá)",
            "Tổng số lượng Collision Domain, giảm kích thước Collision Domain",
            "Subnet",
            "VLAN"
        ]
    },
    {
        numb: 40,
        question: "Ứng dụng nào sau đây dùng giao thức UDP(User Datagram Protocol)?",
        answer: "Web, DNS, điện thoại Internet",
        options: [
            "Tải file lớn, gửi email quan trọng",
            "Web, DNS, điện thoại Internet",
            "Truy cập website (HTTP)",
            "Tất cả các ứng dụng trên Internet"
        ]
    },
    {
        numb: 41,
        question: "Khái niệm RTT (Round Trip-time), hãy xác định thời gian di chuyển của gói tin?",
        answer: "Thời gian để gửi 1 gói nhỏ đi từ client đến server và quay lại",
        options: [
            "Thời gian để tải xong một trang web",
            "Tốc độ truyền dữ liệu của đường truyền",
            "Thời gian để gửi 1 gói nhỏ đi từ client đến server và quay lại",
            "Thời gian xử lý gói tin tại router"
        ]
    },
    {
        numb: 42,
        question: "Giao thức UDP socket xác định bởi?",
        answer: "Địa chỉ IP nguồn, IP đích",
        options: [
            "Địa chỉ MAC nguồn và đích",
            "IP nguồn và IP đích",
            "Port nguồn và Port đích",
            "Địa chỉ IP nguồn, IP đích"
        ]
    },
    {
        numb: 43,
        question: "Giao thức TCP xác định bởi?",
        answer: "Địa chỉ IP nguồn, IP đích, Số port nguồn, Số port đích",
        options: [
            "Phi kết nối và không đảm bảo độ tin cậy",
            "Hướng kết nối và đảm bảo độ tin cậy",
            "Chỉ dùng để gửi dữ liệu, không nhận",
            "Địa chỉ IP nguồn, IP đích, Số port nguồn, Số port đích"
        ]
    },
    {
        numb: 44,
        question: "Thiết bị router cho phép làm gì?",
        answer: "Liên kết nhiều mạng lan lại với nhau, đồng thời ngăn cách các broadcast đi qua nó và giúp định tuyến cho các packet",
        options: [
            "Liên kết nhiều mạng LAN lại với nhau",
            "Ngăn chặn gói tin broadcast lan truyền giữa các mạng",
            "Định tuyến cho các packet tìm đường đi",
            "Liên kết nhiều mạng lan lại với nhau, đồng thời ngăn cách các broadcast đi qua nó và giúp định tuyến cho các packet"
        ]
    },
    {
        numb: 45,
        question: "Phát biểu nào sai sau về thông tin điện tử?",
        answer: "Nội dung trình duyệt web",
        options: [
            "Chỉ văn bản mới là thông tin điện tử",
            "Thông tin điện tử không thể sao chép",
            "Nội dung trình duyệt web",
            "Thông tin điện tử chỉ tồn tại trên máy tính cá nhân"
        ]
    },
    {
        numb: 46,
        question: "Thao tác nào không thực hiện được với trang web?",
        answer: "Xóa nội dung bằng cách chọn đoạn nội dung và nhấn nút Delete",
        options: [
            "Lưu trang web về máy",
            "Sao chép một đoạn văn bản",
            "In trang web",
            "Xóa nội dung bằng cách chọn đoạn nội dung và nhấn nút Delete"
        ]
    },
    {
        numb: 47,
        question: "Trình duyệt Mozilla Firefox, khi muốn lưu nội dung trang web, dùng lệnh nào?",
        answer: "Save As, Type: web page complete",
        options: [
            "Web Page, HTML Only",
            "Text File",
            "Save As, Type: web page complete",
            "All Files"
        ]
    },
    {
        numb: 48,
        question: "Mozilla Firefox, thiết lập in ngang trang web, chọn file -> print setup -> ?",
        answer: "Landscape",
        options: [
            "Portrait",
            "Landscape",
            "Horizontal",
            "A4"
        ]
    },
    {
        numb: 49,
        question: "Thư điện tử là thư truyền dưới dạng?",
        answer: "Số",
        options: [
            "Thùng rác",
            "Mũi tên quay lại",
            "Mũi tên chỉ sang phải",
            "Số"
        ]
    },
    {
        numb: 50,
        question: "Khi nhận được tập tin đính kèm, nên làm gì?",
        answer: "Quét tệp tin máy bằng chương trình diệt virus",
        options: [
            "Mở ngay để xem nội dung",
            "Trả lời email để hỏi nội dung",
            "Xóa ngay email đó",
            "Quét tệp tin máy bằng chương trình diệt virus"
        ]
    },
    {
        numb: 51,
        question: "Với thư điện tử, phát biểu nào là sai?",
        answer: "Hai người có địa chỉ thư giống nhau hoahong@yahoo.com",
        options: [
            "Mỗi địa chỉ thư là duy nhất",
            "Có thể gửi thư cho nhiều người cùng lúc",
            "Hai người có địa chỉ thư giống nhau hoahong@yahoo.com",
            "Có thể đính kèm tệp tin vào thư"
        ]
    },
    {
        numb: 52,
        question: "Một người dùng gửi nhiều hình ảnh ở nhiều nơi dùng gì?",
        answer: "Thư điện tử từ đính kèm tệp",
        options: [
            "To",
            "Cc (Carbon Copy)",
            "Bcc (Blind Carbon Copy)",
            "Thư điện tử từ đính kèm tệp"
        ]
    },
    {
        numb: 53,
        question: "Trên window server 2019 khi sử dụng lệnh 'Route Print' thì hiển thị gì?",
        answer: "Hiển thị thông tin bảng định tuyến của máy tính",
        options: [
            "In một tài liệu",
            "Kiểm tra kết nối mạng",
            "Hiển thị thông tin bảng định tuyến của máy tính",
            "Cấu hình địa chỉ IP"
        ]
    },
    {
        numb: 54,
        question: "Để kết nối với nhà cung cấp dịch vụ Intenet, người ta dùng thiết bị mạng?",
        answer: "Dùng Router có chức năng mạng Wifi",
        options: [
            "Hub",
            "Switch không có chức năng định tuyến",
            "Modem chỉ có 1 cổng LAN",
            "Dùng Router có chức năng mạng Wifi"
        ]
    },
    {
        numb: 55,
        question: "Hiện nay nhiều máy tính kết nối Internet(có địa chỉ chính danh Internet) mà phải nhờ một hệ thống máy tính đại diện?",
        answer: "Vì do không gian địa chỉ internet là hữu hạn",
        options: [
            "Vì IP công cộng có tốc độ chậm hơn",
            "Vì IP công cộng không an toàn",
            "Vì do không gian địa chỉ internet là hữu hạn",
            "Vì IP công cộng phải trả phí rất cao cho mỗi máy"
        ]
    },
    {
        numb: 56,
        question: "Do không gian của địa chỉ internet vô hạn?",
        answer: "NAT (Network Address Translation)", // Sửa lại đáp án cho phù hợp với câu hỏi có thể bị lỗi cú pháp
        options: [
            "NAT (Network Address Translation)",
            "DHCP",
            "DNS",
            "Thông qua các tập tin từ Internet. Sao chép dữ liệu từ USB"
        ]
    },
    {
        numb: 57,
        question: "Cho biết chức năng của một dịch proxy trên server?",
        answer: "Dịch vụ bảo mật cho server và máy khách",
        options: [
            "Cấp phát địa chỉ IP",
            "Dịch vụ bảo mật cho server và máy khách",
            "Lưu trữ website",
            "Dịch tên miền thành IP"
        ]
    },
    {
        numb: 58,
        question: "Trạng thái của mạng dạng BUS sẽ thế nào nếu không có terminator?",
        answer: "Mạng không hoạt động được",
        options: [
            "Router",
            "Repeater",
            "Mạng không hoạt động được",
            "Connector"
        ]
    },
    {
        numb: 59,
        question: "Giao thức cho phép Router chia sẻ với nhau?",
        answer: "RIP (Routing Information Protocol)",
        options: [
            "FTP (File Transfer Protocol)",
            "HTTP (HyperText Transfer Protocol)",
            "RIP (Routing Information Protocol)",
            "ARP (Address Resolution Protocol)"
        ]
    },
    {
        numb: 60,
        question: "Phần nào trong địa chỉ IP được router sử dụng tìm được đường đi?",
        answer: "host address", // Câu hỏi và đáp án này có thể cần làm rõ hơn, router dùng phần network address để định tuyến.
        options: [
            "Đặt địa chỉ IP cho router",
            "Đặt tên cho router",
            "host address",
            "Cấu hình mật khẩu"
        ]
    },
    {
        numb: 61,
        question: "Lệnh cấu hình giao diện Vlan?",
        answer: "Interface Vlan",
        options: [
            "vlan [số vlan]",
            "configure vlan [số vlan]",
            "Interface Vlan",
            "ip address vlan [số vlan]"
        ]
    },
    {
        numb: 62,
        question: "Lệnh cấu hình địa chỉ IP?",
        answer: "ip address",
        options: [
            "ip address",
            "set ip",
            "interface ip",
            "address is"
        ]
    },
    {
        numb: 63,
        question: "Lệnh cấu hình banner login cho thiết bị mạng?",
        answer: "banner login",
        options: [
            "login message",
            "display text",
            "banner login",
            "set welcome"
        ]
    },
    {
        numb: 64,
        question: "Lệnh truy cập từ xa vào thiết bị mạng telnet?",
        answer: "telnet",
        options: [
            "connect [địa chỉ IP]",
            "remote [địa chỉ IP]",
            "telnet",
            "ssh [địa chỉ IP]"
        ]
    },
    {
        numb: 65,
        question: "Lệnh xóa, khôi phục cấu hình ở startup config?",
        answer: "copy running-config startup-config, Reload",
        options: [
            "save running-config",
            "write memory",
            "copy running-config startup-config, Reload",
            "reload"
        ]
    },
    {
        numb: 66,
        question: "Tác giả Linux?",
        answer: "Linus Tolvards",
        options: [
            "Bill Gates",
            "Steve Jobs",
            "Richard Stallman",
            "Linus Tolvards"
        ]
    },
    {
        numb: 67,
        question: "Soạn thảo vi trong hệ điều hành Linux để chuyển về chế độ lệnh ta nhấn?",
        answer: "ESC",
        options: [
            "Enter",
            "Tab",
            "ESC",
            "Ctrl + C"
        ]
    },
    {
        numb: 68,
        question: "Soạn thảo vi trong hệ điều hành Linux lệnh ghi và thoát?",
        answer: ":wq",
        options: [
            ":q!",
            ":w",
            ":wq",
            ":exit"
        ]
    },
    {
        numb: 69,
        question: "Trong Linux, lệnh nào dùng để liệt kê các file trong thư mục hiện tại?",
        answer: "Lệnh ls",
        options: [
            "dir",
            "list",
            "Lệnh ls",
            "show"
        ]
    },
    {
        numb: 70,
        question: "Địa chỉ ip nào sau đây là địa chỉ Loopback?",
        answer: "127.0.0.1",
        options: [
            "Địa chỉ broadcast, gửi gói tin đến tất cả các máy",
            "Địa chỉ gateway, để đi ra ngoài mạng",
            "127.0.0.1",
            "Địa chỉ DNS server"
        ]
    },
    {
        numb: 71,
        question: "Phương pháp nào dùng để chặn xâm nhập và lọc bỏ các gói tin trong hệ thống mạng?",
        answer: "Firewall",
        options: [
            "Router",
            "Switch",
            "Firewall",
            "Hub"
        ]
    },
    {
        numb: 72,
        question: "Điều gì là đúng với các giao thức dạng Connectionless(không kết nối) khi trao đổi trên hệ thống máy tính?",
        answer: "Cung cấp một dịch vụ cấp phát dữ liệu không đáng tin cậy",
        options: [
            "Phải thực hiện bắt tay ba bước trước khi gửi",
            "Đảm bảo mọi gói tin đến đúng thứ tự",
            "Cung cấp một dịch vụ cấp phát dữ liệu không đáng tin cậy",
            "Tốc độ chậm nhưng rất ổn định"
        ]
    },
    {
        numb: 73,
        question: "Dịch vụ chuyển gói tin nào sau đây tích hợp các kỹ thuật số trong bảo mật dữ liệu trên mạng máy tính?",
        answer: "Chuyển mạch kênh và chuyển mạch gói",
        options: [
            "Chuyển mạch kênh (Circuit Switching)",
            "Chuyển mạch kênh và chuyển mạch gói",
            "Broadcasting",
            "Streaming"
        ]
    },
    {
        numb: 74,
        question: "Khi cần truyền một thông điệp và dùng 2 dịch vụ bí mật và xác thực gói tin, thì phần nào sẽ được mã hóa bằng khóa phiên?",
        answer: "Thông điệp và chữ ký số trên thông điệp",
        options: [
            "Mã hóa (Encryption)",
            "Nén dữ liệu (Compression)",
            "Thông điệp và chữ ký số trên thông điệp",
            "Phân quyền (Authorization)"
        ]
    },
    {
        numb: 75,
        question: "Xác định cách tấn công chủ động vào hệ thống mạng máy tính?",
        answer: "Tấn công giả mạo",
        options: [
            "Tấn công từ chối dịch vụ (DoS)",
            "Tấn công giả mạo",
            "Tấn công nghe lén (Eavesdropping)",
            "Tấn công bằng mã độc (Malware)"
        ]
    },
    {
        numb: 76,
        question: "Lựa chọn cách phòng chống tấn công từ chối dịch vụ (DoS)?",
        answer: "Lưu trữ và backup dữ liệu",
        options: [
            "Đổi mật khẩu thường xuyên",
            "Cài phần mềm diệt virus",
            "Lưu trữ và backup dữ liệu",
            "Không truy cập các trang web lạ"
        ]
    },
    {
        numb: 77,
        question: "Thứ điện tử có đặc điểm gì so với thư truyền thống?",
        answer: "Có thể gửi đồng thời nhiều người",
        options: [
            "Bảo mật hơn",
            "Phải viết tay",
            "Có thể gửi đồng thời nhiều người",
            "Luôn miễn phí"
        ]
    },
    {
        numb: 78,
        question: "Phương thức nào sau đây bảo mật thông tin trên hệ thống mạng?",
        answer: "Firewall", // Firewall là phương án đúng và phổ biến nhất. NAT cũng là một cơ chế nhưng chức năng chính là biên dịch địa chỉ.
        options: [
            "VLAN",
            "Subnetting",
            "NAT - Network Address Translation",
            "Firewall"
        ]
    },
    {
        numb: 79,
        question: "Trên máy chủ có một bản ghi dịch vụ DNS (Vnvc.edu.vn, 125.6.5.7.NS). Hãy chọn câu trả lời đúng?",
        answer: "vsvc.edu.vn là tên miền chứ không phải một máy chủ",
        options: [
            "A (Address)",
            "CNAME (Canonical Name)",
            "MX (Mail Exchange)",
            "vsvc.edu.vn là tên miền chứ không phải một máy chủ"
        ]
    },
    {
        numb: 80,
        question: "Tất cả các thuê bao fpt truy cập vào google.com chuyển hướng sang một web khác. các máy tính khác trong hệ thống không gặp tình trạng này. Nguyên nhân gây ra lỗi lớn nhất là?",
        answer: "DNS Server FPT bị lỗi",
        options: [
            "Lỗi cáp mạng",
            "Lỗi card mạng",
            "DNS Server FPT bị lỗi",
            "Hết dung lượng ổ cứng"
        ]
    },
    {
        numb: 81,
        question: "Khi người dùng truy cập intenet thành công và xuất hiện 404, nguyên nhân là?",
        answer: "Đối tượng Client không có",
        options: [
            "Bỏ qua gói tin đó",
            "Yêu cầu gửi lại toàn bộ trang web",
            "Đối tượng Client không có",
            "Hiển thị thông báo lỗi cho người dùng ngay lập tức"
        ]
    },
    {
        numb: 82,
        question: "Khẳng định nào sau đây là đúng khi nói về mạng mạch chuyển đổi gói?",
        answer: "Gói tin lưu chuyển trên các kết nối logic hướng đích và trên một đường có thể có nhiều gói tin cùng lưu chuyển",
        options: [
            "Thiết lập một kênh riêng cho mỗi kết nối",
            "Tài nguyên mạng được chia sẻ, hiệu quả hơn chuyển mạch kênh",
            "Tất cả các gói tin phải đi theo cùng một con đường",
            "Gói tin lưu chuyển trên các kết nối logic hướng đích và trên một đường có thể có nhiều gói tin cùng lưu chuyển"
        ]
    },
    {
        numb: 83,
        question: "hãy xác định hệ số suy hao của hệ thống mạng?",
        answer: "Độ suy yếu của tín hiệu đường truyền",
        options: [
            "Băng thông (Bandwidth)",
            "Độ trễ (Latency)",
            "Độ suy yếu của tín hiệu đường truyền",
            "Nhiễu (Noise)"
        ]
    },
    {
        numb: 84,
        question: "Chức năng của giao thức IP trong mô hình mạng là?",
        answer: "Định nghĩa cơ chế địa chỉ trong mạng Internet.",
        options: [
            "Mã hóa dữ liệu truyền đi",
            "Định nghĩa cơ chế địa chỉ trong mạng Internet.",
            "Kiểm soát truy cập người dùng",
            "Tăng tốc độ truyền dữ liệu"
        ]
    },
    {
        numb: 85,
        question: "Những chương trình sau đây là chương trình duyệt web?",
        answer: "Internet Explorer, Firefox, Chrome.",
        options: [
            "Microsoft Word, Excel, PowerPoint.",
            "Internet Explorer, Firefox, Chrome.",
            "Zalo, Skype, Teams.",
            "Notepad, Paint, Calculator."
        ]
    },
    {
        numb: 86,
        question: "Máy tính dùng internet, sử dụng liên kết hyper link sẽ cho phép người dùng liên kết?",
        answer: "Tất cả các tệp tin, các slide có trong máy và các trang web.",
        options: [
            "Chỉ các trang web.",
            "Chỉ các tệp tin văn bản.",
            "Tất cả các tệp tin, các slide có trong máy và các trang web.",
            "Chỉ các slide trình chiếu."
        ]
    },
    {
        numb: 87,
        question: "Để tìm kiếm các trang web liên quan lĩnh vực đào tạo quản trị mạng, ta dùng từ khóa?",
        answer: "Đào tạo quản trị mạng",
        options: [
            "Tin học văn phòng",
            "Đào tạo quản trị mạng",
            "Thiết kế đồ họa",
            "Lập trình web"
        ]
    },
    {
        numb: 88,
        question: "Virus máy tính có đặc điểm gì?",
        answer: "Những chương trình được viết ra với mục đích không tốt.",
        options: [
            "Chỉ dùng để bảo vệ máy tính.",
            "Những chương trình được viết ra với mục đích không tốt.",
            "Tăng tốc độ máy tính.",
            "Tối ưu hóa hệ điều hành."
        ]
    },
    {
        numb: 89,
        question: "Hacker viết ra các chương trình virus nhằm mục đích?",
        answer: "Đánh cắp thông tin dữ liệu của nhóm hoặc tổ chức.",
        options: [
            "Tăng tốc độ mạng.",
            "Đánh cắp thông tin dữ liệu của nhóm hoặc tổ chức.",
            "Cải thiện bảo mật hệ thống.",
            "Tối ưu hóa phần mềm."
        ]
    },
    {
        numb: 90,
        question: "Lệnh nào để xem cấu hình hiện tại của thiết bị?",
        answer: "show running-config",
        options: [
            "ipconfig",
            "show running-config",
            "ping",
            "netstat"
        ]
    },
    {
        numb: 91,
        question: "Phiên bản kernel của hệ điều hành linux có gì đặc biệt so với các bản trước?",
        answer: "Số chẵn và số lẻ là bản thử nghiệm.",
        options: [
            "Chỉ có số lẻ là bản chính thức.",
            "Số chẵn và số lẻ là bản thử nghiệm.",
            "Không có sự khác biệt.",
            "Chỉ có số chẵn là bản thử nghiệm."
        ]
    },
    {
        numb: 92,
        question: "Trong hệ điều hành linux, trình soạn thảo nào sau đây không sử dụng đồ họa khi soạn thảo chương trình?",
        answer: "vi",
        options: [
            "gedit",
            "vi",
            "libreoffice writer",
            "sublime text"
        ]
    },
    {
        numb: 93,
        question: "Lệnh nào để login từ xa qua mạng một máy linux?",
        answer: "telnet, ssh và rlogin.",
        options: [
            "ftp",
            "telnet, ssh và rlogin.",
            "scp",
            "curl"
        ]
    },
    {
        numb: 94,
        question: "Dịch vụ ssh trong hệ điều hành linux là gì?",
        answer: "Secure shell.",
        options: [
            "Simple shell.",
            "Secure shell.",
            "Superuser shell.",
            "System shell."
        ]
    },
    {
        numb: 95,
        question: "Dữ liệu truyền từ máy tính A sang máy tính B phải trải qua quá trình nào sau đây?",
        answer: "Nén và đóng gói dữ liệu.",
        options: [
            "Chỉ mã hóa dữ liệu.",
            "Nén và đóng gói dữ liệu.",
            "Chỉ kiểm tra lỗi.",
            "Chỉ phân mảnh dữ liệu."
        ]
    },
    {
        numb: 96,
        question: "Phương thức nào mà cả 2 bên đều có thể sử dụng đồng thời gửi dữ liệu trên hệ thống mạng máy tính?",
        answer: "Full-duplex.",
        options: [
            "Simplex.",
            "Half-duplex.",
            "Full-duplex.",
            "Broadcast."
        ]
    },
    {
        numb: 97,
        question: "Khẳng định nào sau đây là đúng khi nói về ngôn ngữ đánh dấu văn bản HTML?",
        answer: "Là công cụ soạn thảo trang thông tin web.",
        options: [
            "Chỉ dùng để lập trình ứng dụng di động.",
            "Là công cụ soạn thảo trang thông tin web.",
            "Chỉ dùng để tạo bảng tính.",
            "Chỉ dùng để thiết kế đồ họa."
        ]
    },
    {
        numb: 98,
        question: "Khẳng định nào sau đây là đúng khi nói về tên gọi của loại máy chủ cung cấp thư điện tử?",
        answer: "Mail Server.",
        options: [
            "Web Server.",
            "Mail Server.",
            "File Server.",
            "Print Server."
        ]
    },
    {
        numb: 99,
        question: "Hãy xác định độ nhiễu điện từ trong quá trình trao đổi gói tin hệ thống mạng.",
        answer: "Độ suy yếu của tín hiệu đường truyền.",
        options: [
            "Tăng tốc độ truyền dữ liệu.",
            "Độ suy yếu của tín hiệu đường truyền.",
            "Tăng băng thông.",
            "Giảm độ trễ."
        ]
    },
    {
        numb: 100,
        question: "Chức năng của tầng trình diễn là?",
        answer: "Chuyển đổi ngôn ngữ người sử dụng về ngôn ngữ hệ thống mạng.",
        options: [
            "Kiểm soát truy cập người dùng.",
            "Chuyển đổi ngôn ngữ người sử dụng về ngôn ngữ hệ thống mạng.",
            "Mã hóa dữ liệu truyền đi.",
            "Định tuyến gói tin."
        ]
    }
];
