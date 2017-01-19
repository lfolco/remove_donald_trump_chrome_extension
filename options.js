// load and save options for MAKA

// Saves options to chrome.storage
function save_options() {
    var Mike_Pence = document.getElementById('Mike_Pence').checked;
    var Mitch_McConnell = document.getElementById('Mitch_McConnell').checked;
    var Paul_Ryan = document.getElementById('Paul_Ryan').checked;
    var Sean_Spicer = document.getElementById('Sean_Spicer').checked;
    var Rex_Tillerson = document.getElementById('Rex_Tillerson').checked;
    var Steven_Mnuchin = document.getElementById('Steven_Mnuchin').checked;
    var James_Mattis = document.getElementById('James_Mattis').checked;
    var John_Kelly = document.getElementById('John_Kelly').checked;
    var Jeff_Sessions = document.getElementById('Jeff_Sessions').checked;
    var Ben_Carson = document.getElementById('Ben_Carson').checked;
    var Sonny_Perdue = document.getElementById('Sonny_Perdue').checked;
    var Elaine_Chao = document.getElementById('Elaine_Chao').checked;
    var Tom_Price = document.getElementById('Tom_Price').checked;
    var Rick_Perry = document.getElementById('Rick_Perry').checked;
    var Andrew_Puzder = document.getElementById('Andrew_Puzder').checked;
    var Betsy_DeVos = document.getElementById('Betsy_DeVos').checked;
    var Ryan_Zinke = document.getElementById('Ryan_Zinke').checked;
    var Wilbur_Ross = document.getElementById('Wilbur_Ross').checked;
    var David_Shulkin = document.getElementById('David_Shulkin').checked;

    chrome.storage.local.set({
        Mike_Pence: Mike_Pence,
        Mitch_McConnell: Mitch_McConnell,
        Paul_Ryan: Paul_Ryan,
        Sean_Spicer: Sean_Spicer,
        Rex_Tillerson: Rex_Tillerson,
        Steven_Mnuchin: Steven_Mnuchin,
        James_Mattis: James_Mattis,
        John_Kelly: John_Kelly,
        Jeff_Sessions: Jeff_Sessions,
        Ben_Carson: Ben_Carson,
        Sonny_Perdue: Sonny_Perdue,
        Elaine_Chao: Elaine_Chao,
        Tom_Price: Tom_Price,
        Rick_Perry: Rick_Perry,
        Andrew_Puzder: Andrew_Puzder,
        Betsy_DeVos: Betsy_DeVos,
        Ryan_Zinke: Ryan_Zinke,
        Wilbur_Ross: Wilbur_Ross,
        David_Shulkin: David_Shulkin
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 2000);
    });
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value
    chrome.storage.local.get({
        Mike_Pence: false,
        Mitch_McConnell: false,
        Paul_Ryan: false,
        Sean_Spicer: false,
        Rex_Tillerson: false,
        Steven_Mnuchin: false,
        James_Mattis: false,
        John_Kelly: false,
        Jeff_Sessions: false,
        Ben_Carson: false,
        Sonny_Perdue: false,
        Elaine_Chao: false,
        Tom_Price: false,
        Rick_Perry: false,
        Andrew_Puzder: false,
        Betsy_DeVos: false,
        Ryan_Zinke: false,
        Wilbur_Ross: false,
        David_Shulkin: false
    }, function (items) {
        document.getElementById('Mike_Pence').checked = items.Mike_Pence;
        document.getElementById('Mitch_McConnell').checked = items.Mitch_McConnell;
        document.getElementById('Paul_Ryan').checked = items.Paul_Ryan;
        document.getElementById('Sean_Spicer').checked = items.Sean_Spicer;
        document.getElementById('Rex_Tillerson').checked = items.Rex_Tillerson;
        document.getElementById('Steven_Mnuchin').checked = items.Steven_Mnuchin;
        document.getElementById('James_Mattis').checked = items.James_Mattis;
        document.getElementById('John_Kelly').checked = items.John_Kelly;
        document.getElementById('Jeff_Sessions').checked = items.Jeff_Sessions;
        document.getElementById('Ben_Carson').checked = items.Ben_Carson;
        document.getElementById('Sonny_Perdue').checked = items.Sonny_Perdue;
        document.getElementById('Elaine_Chao').checked = items.Elaine_Chao;
        document.getElementById('Tom_Price').checked = items.Tom_Price;
        document.getElementById('Rick_Perry').checked = items.Rick_Perry;
        document.getElementById('Andrew_Puzder').checked = items.Andrew_Puzder;
        document.getElementById('Betsy_DeVos').checked = items.Betsy_DeVos;
        document.getElementById('Ryan_Zinke').checked = items.Ryan_Zinke;
        document.getElementById('Wilbur_Ross').checked = items.Wilbur_Ross;
        document.getElementById('David_Shulkin').checked = items.David_Shulkin;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
