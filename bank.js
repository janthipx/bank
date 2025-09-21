// class bank ใน JavaScript

export class bank {
  constructor() {
    this.customers = [];
  }

  // เพิ่มลูกค้าโดยให้ผู้ใช้สร้างรหัสผ่านเอง
  addCustomer(id, name, password) {
    const existing = this.customers.find(c => c.id === id);
    if (existing) {
      console.log(`❌ มีลูกค้าด้วย ID นี้มีอยู่แล้ว`);
      return;
    }
    this.customers.push({ id, name, password, balance: 0 });
    console.log(`✅ เพิ่มลูกค้า ${name} สำเร็จ`);
  }

  // ฟังก์ชันล็อกอิน
  login(id, password) {
    const customer = this.customers.find(c => c.id === id && c.password === password);
    if (customer) {
      console.log(`✅ ล็อกอินสำเร็จ ยินดีต้อนรับคุณ ${customer.name}`);
      return true;
    } else {
      console.log("❌ ล็อกอินไม่สำเร็จ กรุณาตรวจสอบ ID หรือรหัสผ่าน");
      return false;
    }
  }

  // ฟังก์ชันฝากเงิน
  deposit(id, amount) {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) {
      console.log(`❌ ไม่พบลูกค้า`);
      return;
    }
    customer.balance += amount;
    console.log(`💰 ฝากเงิน ${amount} บาทให้ ${customer.name} เรียบร้อย`);
  }

  // ฟังก์ชันถอนเงิน
  withdraw(id, amount) {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) {
      console.log(`❌ ไม่พบลูกค้า`);
      return;
    }
    if (customer.balance < amount) {
      console.log(`⚠️ ยอดเงินไม่พอสำหรับการถอน`);
      return;
    }
    customer.balance -= amount;
    console.log(`💸 ถอนเงิน ${amount} บาทจาก ${customer.name} เรียบร้อย`);
  }

  // ฟังก์ชันเช็คข้อมูลลูกค้า
  checkCustomer(id) {
    const customer = this.customers.find(c => c.id === id);
    if (!customer) {
      console.log(`❌ ไม่พบลูกค้า`);
      return;
    }
    console.log(`📋 ข้อมูลลูกค้า:
    - ชื่อ: ${customer.name}
    - ยอดคงเหลือ: ${customer.balance} บาท`);
  }
}
