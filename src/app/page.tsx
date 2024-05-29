import React from 'react'
import Image from "next/image";
import styles from "./page.module.css";
type Props = {}

const page = (props: Props) => {
  return (
  <>
    <div>
      <img className={styles['Image-background1']} src="/background.png" alt="Background" style={{ width: '100%', height: 'auto' }} />
      <p className={styles.Data}>รับออกแบบเว็บไซต์ให้ตอบโจทย์ธุรกิจทุกระดับ</p>
      <p className={styles.Detail}>ตัวช่วยเรื่องธุรกิจของคุณ ไม่ว่าธุรกิจขนาดเล็กหรือใหญ่ เราพร้อมสร้างสรรค์ต่อยอดจิตนาการให้เกิดขึ้นจริง</p>
      <div className={styles.DivTitle}>
        <div className={styles.DivT1}>
          <h1 className={styles.Title}>BUSINESS</h1>
          <img className={styles.Image} src="/business.png" alt="Business" style={{ width: '80%', height: 'auto' }} />
        </div>
        <div className={styles.DivT2}>
          <h1 className={styles.Title}>E-COMMERCE</h1>
          <img className={styles.Image} src="/e-commerce.png" alt="E-commerce" style={{ width: '50%', height: 'auto' }} />
        </div>
        <div className={styles.DivT2}>
          <h1 className={styles.Title}>CORPORATE</h1>
          <img className={styles.Image} src="/corporate.png" alt="Corporate" style={{ width: '60%', height: 'auto' }} />
        </div>
      </div>
    </div>
    <div className={styles.DivAbout}>
      <h1 className={styles.AboutTitle}>เกี่ยวกับเรา</h1>
      <p className={styles.AboutDetail}>เราเป็นทีมงานที่อายุน้อย ประสบการณ์ 3 ปี มีความคิดสร้างสรรค์ มุ่งมั่น และกระตือรือร้น โดยมุ่งมั่นที่จะสร้างกลไกการเติบโตที่จะขับเคลื่อนการเติบโตไปอีกนาน</p>
    </div>
    <div>
      <img className={styles['Image-WorkProcess']} src="/WorkProcess.jpg" alt="WorkProcess" style={{ width: '100%', height: 'auto' }} />
    </div>
    <div className={styles.DivPerks}>
        <img className={styles['Image-Pngtree']} src="/pngtree.png" alt="Pngtree" style={{ width: '8%', height: "auto" }} />
        <h1 className={styles.Perks}>Perks & Benefits</h1>
    </div>
    <div className={styles.DivPerks2}>
      <div className={styles.DivP1}>
        <img className={styles['Image-Polygon']} src="/polygon.png" alt="Polygon" style={{ width: '8%', height: "auto", marginTop: 15 }} />
        <h1 className={styles.PerksTitle}>Website Package</h1>
      </div>
      <div className={styles.DivP2}>
        <p className={styles.PerksDetail}>เหมาะสำหรับธุรกิจ SME ขนาดเล็ก-กลางการนำเสนอสินค้า/บริการ/บริษัท ที่มีข้อมูลไม่มาก เน้นนำเสนอเรื่องใดเรื่องหนึ่ง เช่น ข้อมูลสินค้า ข้อมูลบริการ เป็นต้น</p>
        <h1 className={styles.PerksPrice}>ราคา <span className={styles.PriceValue}>2,999</span> บาท</h1>
        <ul>
            <li className={styles.PerksDetail}>ออกแบบเว็บไซต์ 1 หน้า</li>
            <li className={styles.PerksDetail}>รองรับ <span className={styles.DetailColor}>1 ภาษา</span> </li>
            <li className={styles.PerksDetail}>ทั้งบนเวอร์ชั่น Desktop และ Mobile</li>
            <li className={styles.PerksDetail}>ปุ่ม Contact เชื่อมต่อทุก Social media</li>
            <li className={styles.PerksDetail}>เมนูหัวข้อ <span className={styles.DetailColor}>5 เมนู</span></li>
            <li className={styles.PerksDetail}>ปรับแก้แบบดีไซต์จนกว่าจะแล้วเสร็จ</li>
            <li className={styles.PerksDetail}>แบนเนอร์/ภาพสไลด์ <span className={styles.DetailColor}>ในเว็บไซต์ 6 ภาพ</span></li>
            <li className={styles.PerksDetail}>ลงข้อมูลประกอบเว็บไซต์ พร้อมใช้งาน</li>
            <li className={styles.PerksDetail}>จดโดเมน <span className={styles.DetailColor}>ฟรี 1 ปีแรก</span> *ต่ออายุปีถัดไป 2,000 บาท</li>
          </ul>
      </div>
    </div>
    <div className={styles.DivPerks2}>
      <div className={styles.DivP1}>
        <img className={styles['Image-Polygon']} src="/polygon.png" alt="Polygon" style={{ width: '8%', height: "auto", marginTop: 15 }} />
        <h1 className={styles.PerksTitle}>Website Package V.2</h1>
      </div>
      <div className={styles.DivP2}>
          <p className={styles.PerksDetail}>เหมาะสำหรับธุรกิจ SME ขนาดเล็ก-กลางการนำเสนอสินค้า/บริการ/บริษัท ที่มีข้อมูลจำนวนมาก</p>
          <h1 className={styles.PerksPrice}>ราคา <span className={styles.PriceValue}>4,999</span> บาท</h1>
        <ul>
          <li className={styles.PerksDetail}>ออกแบบเว็บไซต์ <span className={styles.DetailColor}>5 หน้า</span></li>
          <li className={styles.PerksDetail}>รองรับ <span className={styles.DetailColor}>2 ภาษา</span></li>
          <li className={styles.PerksDetail}>ทั้งบนเวอร์ชั่น Desktop และ Mobile</li>
          <li className={styles.PerksDetail}>ปุ่ม Contact เชื่อมต่อทุก Social media</li>
          <li className={styles.PerksDetail}>เมนูหัวข้อ <span className={styles.DetailColor}>8 เมนู</span></li>
          <li className={styles.PerksDetail}>ปรับแก้แบบดีไซต์จนกว่าจะแล้วเสร็จ</li>
          <li className={styles.PerksDetail}>แบนเนอร์/ภาพสไลด์ <span className={styles.DetailColor}>ในเว็บไซต์ 30 ภาพ</span></li>
          <li className={styles.PerksDetail}>ลงข้อมูลประกอบเว็บไซต์ พร้อมใช้งาน</li>
          <li className={styles.PerksDetail}>จดโดเมน <span className={styles.DetailColor}>ฟรี 1 ปีแรก</span> *ต่ออายุปีถัดไป 2,000 บาท</li>
        </ul>
      </div>
    </div>
    <div className={styles.DivPerks2}>
      <div className={styles.DivP1}>
        <img className={styles['Image-Polygon']} src="/polygon.png" alt="Polygon" style={{ width: '8%', height: "auto", marginTop: 15 }} />
        <h1 className={styles.PerksTitle}>Design website</h1>
      </div>
      <div className={styles.DivP2}>
          <p className={styles.PerksDetail}>เหมาะสำหรับกลุ่มลูกค้าที่ต้องการให้ทีมงานออกแบบเว็ปไซต์</p>
        <div className={styles.DivPrice}>
          <div className={styles.Price1}>
            <h1 className={styles.PerksPrice}>ราคา <span className={styles.PriceValue}>799</span> บาท</h1>
          <ul>
            <li className={styles.PerksDetail}>ออกแบบเว็บไซต์ <span className={styles.DetailColor}>1 หน้า</span> </li>
            <li className={styles.PerksDetail}>รองรับ <span className={styles.DetailColor}>1 ภาษา</span></li>
            <li className={styles.PerksDetail}>เมนูหัวข้อ <span className={styles.DetailColor}>5 เมนู</span></li>
            <li className={styles.PerksDetail}>แบนเบอร์ <span className={styles.DetailColor}>6 ภาพ</span></li>
          </ul>
          </div>
          <div className={styles.Price1}>
              <h1 className={styles.PerksPrice}>ราคา <span className={styles.PriceValue}>1,500</span> บาท</h1>
            <ul>
              <li className={styles.PerksDetail}>ออกแบบเว็บไซต์ <span className={styles.DetailColor}>5 หน้า</span> </li>
              <li className={styles.PerksDetail}>รองรับ <span className={styles.DetailColor}>2 ภาษา</span></li>
              <li className={styles.PerksDetail}>เมนูหัวข้อ <span className={styles.DetailColor}>8 เมนู</span></li>
              <li className={styles.PerksDetail}>แบนเบอร์ <span className={styles.DetailColor}>30 ภาพ</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.DivPerks2}>
      <div className={styles.DivP1}>
        <img className={styles['Image-Polygon']} src="/polygon.png" alt="Polygon" style={{ width: '8%', height: "auto", marginTop: 15 }} />
        <h1 className={styles.PerksTitle}>บริการเสริม</h1>
      </div>
      <div className={styles.DivP2}>
        <h1 className={styles.PerksDetail}>ระบบขายสินค้า พร้อมระบบแจ้งโอนเงิน</h1>
        <div className={styles.Services}>3,000 บาท</div>
      </div>
    </div>
    <div className={styles.webDetail}><h1>Website ที่มีลักษณะเฉพาะเพิ่มเติมสามารถปรึกษา เพื่อประเมินราคา</h1></div>
    <div>
      <img className={styles['Image-Detail']} src="/detail.png" alt="Detail" style={{ width: '100%', height: "auto" }} />
    </div>
    <div className={styles.DivContact}>
      <div className={styles.DivC1}>
        <img className={styles['Image-Logo']} src="/Logo.png" alt="Logo" style={{ width: '10%', height: "auto" }} />
        <h1 className={styles.ContactDetail}>ติดต่อเรา</h1>
      </div>
      <h1 className={styles.ContactDetail}>Tel : 096-820-2695 (24 Hr.)</h1>
      <img className={styles['Image-Logo']} src="/iconLine.png" alt="Line" style={{ width: '5%', height: "auto" }} />
      <img className={styles['Image-Logo']} src="/facebook.png" alt="Facebook" style={{ width: '5%', height: "auto" }} />
    </div>
    <div className={styles.contactBox}>
      <p className={styles.contactBoxText}>© 2024 V.SW. All rights reserved.</p>
    </div>
  </>
  );
}

export default page
