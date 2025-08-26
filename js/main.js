// 블로그 버튼 클릭 이벤트
const blogBtn = document.getElementById('blogBtn');
if (blogBtn)
    blogBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const blogUrl = 'http://devgisoun.github.io/';
        if (blogUrl && blogUrl.trim() !== '') {
            window.open(blogUrl, '_blank');
        }
    });

// 폼 제출 처리
const contactForm = document.getElementById('contactForm');
if (contactForm)
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        // 여기서 실제 서버로 데이터를 전송하거나 이메일 서비스와 연동할 수 있습니다
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다!');
        console.log('Form submitted with data:', data);

        // 폼 초기화
        this.reset();
    });
