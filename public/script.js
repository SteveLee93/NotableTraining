document.addEventListener('DOMContentLoaded', function() {
    // ----------- main page ---------------
    // 'New Protocol' 버튼에 대한 참조를 가져옵니다.
    var btn_newprotocol = document.getElementById('btn_newprotocol');
    // 버튼이 존재하는 경우에만 이벤트 리스너를 추가합니다.
    if (btn_newprotocol) {
        btn_newprotocol.addEventListener('click', function() {
            // 페이지를 new-protocol.html로 리디렉션 합니다.
            window.location.href = '/protocol_setting.html';
        });
    }
    
    // ----------- protocol setting page ---------------
    // Labware 데이터를 나타내는 배열
    var labwares = [
        { id: 1, name: 'Beaker' },
        { id: 2, name: 'Flask' },
        // 기타 Labware 아이템들
    ];
    
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

    // 페이지 로드 시 Labware 목록 업데이트
    updateLabwareList(labwares);
});