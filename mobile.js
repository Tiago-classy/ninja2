const leftImages = document.querySelectorAll('.left-banner .banner-image');
const rightImages = document.querySelectorAll('.right-banner .banner-image');
let leftCurrentIndex = 0;
let rightCurrentIndex = 0;

function showImage(images, index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function rotateImages(images, currentIndex, setCurrentIndex) {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(images, currentIndex);
    setCurrentIndex(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showImage(leftImages, leftCurrentIndex); // Show the first image initially
    showImage(rightImages, rightCurrentIndex); // Show the first image initially
    
    setInterval(() => rotateImages(leftImages, leftCurrentIndex, index => leftCurrentIndex = index), 10000); // Rotate images every 10 seconds
    setInterval(() => rotateImages(rightImages, rightCurrentIndex, index => rightCurrentIndex = index), 10000); // Rotate images every 10 seconds

    // Add click event listeners to the banners
    document.querySelector('.left-banner').addEventListener('click', () => {
        window.open('https://impression.appsflyer.com/id519684662?c=NINJACLICK&affiliate=365_03080943&pid=playhilllto_int&af_siteid=MARINACLICK&af_c_id=NOCRS&af_adset_id=NOCRS&af_adset=NOCRS&af_ad_id=NOCRS&af_viewthrough_lookback=8hm', '_blank');
    });
    document.querySelector('.right-banner').addEventListener('click', () => {
        window.open('https://impression.appsflyer.com/id519684662?c=NINJACLICK&affiliate=365_03080943&pid=playhilllto_int&af_siteid=MARINACLICK&af_c_id=NOCRS&af_adset_id=NOCRS&af_adset=NOCRS&af_ad_id=NOCRS&af_viewthrough_lookback=8h', '_blank');
    });
});
function apssflyercallIOS() {
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://impression.appsflyer.com/id519684662?c=videoOverlay&affiliate=365_03080943&pid=playhilllto_int&af_siteid=NOCRS&af_c_id=NOCRS&af_adset_id=NOCRS&af_adset=NOCRS&af_ad_id=NOCRS&af_viewthrough_lookback=8h', true);
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         console.log('Response from apssflyercall:', xhr.responseText);
    //     }
    // };
    // xhr.send();
    fetch('https://impression.appsflyer.com/id519684662?c=NINJADIRECTfacebook&affiliate=365_03080943&pid=playhilllto_int&af_siteid=NOCRS&af_c_id=NOCRS&af_adset_id=NOCRS&af_adset=NOCRS&af_ad_id=NOCRS&af_viewthrough_lookback=8h', {
  mode: 'no-cors',
  credentials: 'include'
})
}

function apssflyercallAND() {
    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'https://impression.appsflyer.com/com.bet365Wrapper.Bet365_Application?c=videoOverlay&affiliate=365_03080943&pid=playhilllto_int&af_siteid=NOCRS&af_c_id=NOCRS&af_adset_id=NOCRS&af_adset=NOCRS&af_ad_id=NOCRS&af_viewthrough_lookback=8h', true);
    // xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //         console.log('Response from apssflyercall:', xhr.responseText);
    //     }
    // };
    // xhr.send();
    fetch('https://impression.appsflyer.com/com.bet365Wrapper.Bet365_Application?c=NINJADIRECTfacebook&affiliate=365_03080943&pid=playhilllto_int&af_siteid=NOCRS&af_c_id=NOCRS&af_adset_id=NOCRS&af_adset=NOCRS&af_ad_id=NOCRS&af_viewthrough_lookback=8h', {
  mode: 'no-cors',
  credentials: 'include'
})
}
function simulateNinjaTouchingGoogle() {
    console.log("Ninja touched Clever");
}

// Call the function to make a request to Google
// makeRequestToGoogle();
apssflyercallIOS();
apssflyercallAND();
// Simulate ninja.com touching Google
simulateNinjaTouchingGoogle();

