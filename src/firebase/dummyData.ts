import {getFirestore, doc, setDoc, collection} from 'firebase/firestore';

const db = getFirestore()
const ticketRef = collection(db, "ticket");
const packageRef = collection(db, "package");

export const addDummyDataOnce = async() => {
    let isEven = true;
    let difTypes = '';

    for (let i = 1; i < 236; i++) {

        if (i % 2 === 0) {
            isEven = true;
        } else isEven = false;

        switch (i%3) {
            case(1): {
                difTypes = 'Đã sử dụng'
                break;
            }
            case(2): {
                difTypes = 'Chưa sử dụng'
                break;
            }
            default: {
                difTypes = 'Hết hạn'
                break;
            }
        }

        await setDoc(doc(ticketRef, `${i}`), {
            code: 'ALTFGHJU' + `${i}`,
            number: '1234567890' + `${i}`,
            type: 'Vé cổng',
            gate: '1',
            status: difTypes,
            event: 'Hội chợ triển lãm tiêu dùng 2021',
            isChecked: isEven,
            dateUse: Date.parse("2021-03-16"),
            dateMade: Date.parse("2021-03-14"),
        });
    }
}

export const addDummyPackageOnce = async() => {
    let difTypes = '';
    let nameTypes = '';
    let singleTypes = '';
    let comboTypes = '';

    for (let i = 1; i < 116; i++) {
        switch (i%2) {
            case(1): {
                difTypes = 'Đang áp dụng'
                nameTypes = 'Gói gia đình'
                comboTypes = '360000'
                singleTypes = '90000'
                break;
            }
            default: {
                difTypes = 'Tắt'
                nameTypes = 'Gói sự kiện'
                comboTypes = ''
                singleTypes = '20000'
                break;
            }
        }

        await setDoc(doc(packageRef, `${i}`), {
            code: 'ALT20210501' + `${i}`,
            name: nameTypes,
            status: difTypes,
            priceSingle: singleTypes,
            priceCombo: comboTypes,
            dateMade: Date.parse("2021-03-01"),
            dateExpire: Date.parse("2021-03-10"),
        });
    }
}