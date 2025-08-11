// تبديل تبويبات المستويات
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // إزالة النشاط من جميع الأزهار والمحتويات
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // إضافة النشاط للزر والمحتوى المحدد
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// تأثيرات الأمان في الخلفية (أكواد ثنائية عشوائية)
const securityEffects = document.getElementById('securityEffects');

function createBinaryCode() {
    const binaryCode = document.createElement('div');
    binaryCode.className = 'binary-code';
    
    // إنشاء سلسلة ثنائية عشوائية
    let binaryString = '';
    for (let i = 0; i < 20; i++) {
        binaryString += Math.random() > 0.5 ? '1' : '0';
    }
    
    binaryCode.textContent = binaryString;
    
    // وضع عشوائي
    binaryCode.style.top = `${Math.random() * 100}%`;
    binaryCode.style.right = `${Math.random() * 100}%`;
    
    // سرعة عشوائية للحركة
    binaryCode.style.animationDuration = `${10 + Math.random() * 20}s`;
    
    securityEffects.appendChild(binaryCode);
    
    // إزالة العنصر بعد انتهاء الحركة
    setTimeout(() => {
        binaryCode.remove();
    }, 30000);
}

// إنشاء أكواد ثنائية بشكل متكرر
setInterval(createBinaryCode, 1000);

// إنشاء بعض الأكواد عند التحميل
for (let i = 0; i < 20; i++) {
    setTimeout(createBinaryCode, i * 150);
}

// تنعيم التمرير عند النقر على روابط التنقل
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});