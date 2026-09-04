export type Clock = { era:string; title:string; year:string; description:string; message:string; icon:string }
export const clocks: Clock[] = [
  { era:'İlk Işık', title:'Güneş Saati', year:'MÖ 1500', icon:'☀', description:'Gölgenin yönü, günün ilk sessiz takvimiydi.', message:'Güneş ilerlerken gölgeler insanlara günün ritmini fısıldıyordu.' },
  { era:'Akış', title:'Su Saati', year:'MÖ 325', icon:'≈', description:'Düzenli su akışı, gecenin saatlerini ölçmeye başladı.', message:'Su damlaları bile zamanı bölümlere ayırmayı öğretti.' },
  { era:'Dönüş', title:'Kum Saati', year:'MS 700', icon:'⌛', description:'Her tanecik, geri dönmeyen bir ana dönüştü.', message:'Her kum tanesi düştüğünde, bir an sessizce geçmişe karıştı.' },
  { era:'Mekanik', title:'Dişli Saat', year:'1300', icon:'⚙', description:'Zaman ilk kez dişlilerin kararlı kalbine yerleşti.', message:'Gökyüzünü izlemeyi bırakıp zamanı dişlilerin içine yerleştirdik.' },
  { era:'Cep', title:'Cep Saati', year:'1600', icon:'◴', description:'Zaman, insanla birlikte yolculuk etmeye başladı.', message:'Artık zamanı sadece meydanda değil, avucumuzda da taşıyorduk.' },
  { era:'Hassasiyet', title:'Atom Saati', year:'1955', icon:'✦', description:'Bir saniye, atomların titreşimi kadar kesin oldu.', message:'Şimdi zamanı, evrenin en küçük ritimlerinden okuyabiliyoruz.' }
]
