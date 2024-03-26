document.addEventListener('DOMContentLoaded', function() {
    // ----------- ----------- ---------------
    // ----------- main page ---------------
    // ----------- ----------- ---------------
    // 'New Protocol' 버튼에 대한 참조를 가져옵니다.
    var btn_newprotocol = document.getElementById('btn_newprotocol');
    // 버튼이 존재하는 경우에만 이벤트 리스너를 추가합니다.
    if (btn_newprotocol) {
        btn_newprotocol.addEventListener('click', function() {
            // 페이지를 new-protocol.html로 리디렉션 합니다.
            window.location.href = '/protocol_setting.html';
        });
    }
    
    // ----------- ----------- ---------------
    // ----------- protocol setting page ---------------
    // ----------- ----------- ---------------
    // Labware 데이터를 나타내는 배열
    var btn_back = document.getElementById('btn_back');
    if (btn_back) {
        btn_back.addEventListener('click', function() {
            // 페이지를 new-protocol.html로 리디렉션 합니다.
            window.location.href = '/mainpage.html';
        });
    }
    var btn_next = document.getElementById('btn_next');
    if (btn_next) {
        btn_next.addEventListener('click', function() {
            // 페이지를 new-protocol.html로 리디렉션 합니다.
            // window.location.href = '/mainpage.html';
        });
    }
    var labwares = [
        { id: 1, name: '96 Well Plate' },
        { id: 2, name: '1000ul Tip Rack' },
        // 기타 Labware 아이템들
    ];

    var addImages = document.querySelectorAll('.add-labware-image');
    addImages.forEach(function(img) {
        img.addEventListener('click', function() {
            var number = this.parentElement.getAttribute('data-number');
            showOverlay();
        });
    });

    // 폼 제출 이벤트 리스너
    document.getElementById('labware-form').addEventListener('submit', function(event) {
        event.preventDefault(); // 폼 기본 제출 동작 방지
        // 폼 데이터 처리 로직
        console.log('Save the data...');
        // 필요한 데이터 처리 후 오버레이 숨기기
        document.getElementById('overlay').style.display = 'none';
    });

    // 페이지 로드 시 Labware 목록 업데이트
    updateLabwareList(labwares);
});

 // Labware를 HTML에 추가하는 함수
function updateLabwareList(labwares) {
    var labwareList = document.querySelector('.labware-list');
    // labwareList.innerHTML = ''; // 기존 목록을 클리어합니다.
    // 기존 목록을 지우되, Labware 제목은 유지합니다.
    labwareList.querySelectorAll('.labware-item').forEach(function(item) {
        item.remove();
    });

    labwares.forEach(function(labware) {
        var listItem = document.createElement('div');
        listItem.className = 'labware-item';
        listItem.textContent = labware.name;
        labwareList.appendChild(listItem);
    });
}

// Labware를 추가하는 오버레이 UI를 표시하는 함수
function showAddLabwareOverlay(number) {
    // 오버레이 생성
    var overlay = document.createElement('div');
    overlay.className = 'overlay';

    // 오버레이 내용, 예를 들어 폼 또는 정보 입력 필드
    var overlayContent = document.createElement('div');
    overlayContent.className = 'overlay-content';
    overlayContent.innerHTML = `<h2>Add Labware to Position ${number}</h2>
                                <!-- 폼 필드들 추가 -->
                                <button class="close-overlay">Close</button>`;
    overlay.appendChild(overlayContent);

    // 오버레이 닫기 버튼
    var closeBtn = overlay.querySelector('.close-overlay');
    closeBtn.addEventListener('click', function() {
        overlay.remove();
    });

    // 오버레이를 body에 추가
    document.body.appendChild(overlay);
}


function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none';
}

function showOverlay() {
    document.getElementById('overlay').style.display = 'flex';
}