export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  date: string;
  author: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Evden Eve Taşınırken Dikkat Edilmesi Gerekenler',
    slug: 'evden-eve-tasinirken-dikkat-edilmesi-gerekenler',
    excerpt: 'Evden eve taşınma sürecini sorunsuz atlatmak için yapmanız gereken hazırlıklar ve dikkat etmeniz gereken hususlar.',
    coverImage: '/blog/tasinma-rehberi.jpg',
    date: '2023-05-15',
    author: 'Horex Nakliyat Ekibi',
    content: `
## Evden Eve Taşınırken Dikkat Edilmesi Gerekenler

Taşınma, hayatımızın en stresli deneyimlerinden biri olabilir. Ancak doğru planlama ve hazırlık ile bu süreç çok daha sorunsuz ilerleyebilir. Horex Nakliyat olarak, yılların deneyimiyle sizler için evden eve taşınma sürecinde dikkat etmeniz gereken noktaları derledik.

### Taşınma Öncesi Hazırlık

**1. Erken Planlama Yapın**

Taşınma tarihinden en az 4-6 hafta önce planlamaya başlayın. Bu süre, nakliyat firması araştırmak, eşyalarınızı ayıklamak ve paketleme malzemeleri tedarik etmek için size yeterli zamanı sağlayacaktır.

**2. Profesyonel Nakliyat Firması Seçimi**

Güvenilir ve deneyimli bir nakliyat firması seçmek, taşınma sürecinizin en önemli adımıdır. Horex Nakliyat gibi sigortalı, referanslı ve şeffaf fiyatlandırma politikası olan firmalarla çalışın.

**3. Eşyalarınızı Ayıklayın**

Taşınmadan önce kullanmadığınız eşyaları ayırın. Bunları satabilir, bağışlayabilir veya geri dönüşüme gönderebilirsiniz. Taşıyacağınız eşya miktarını azaltmak hem maliyeti düşürecek hem de yeni evinizde düzenlemeyi kolaylaştıracaktır.

**4. Taşınma Bütçesi Oluşturun**

Nakliyat maliyeti, paketleme malzemeleri, sigorta ve beklenmedik giderler için bir bütçe oluşturun. Şeffaf fiyatlandırma politikasına sahip firmalarla çalışarak sürpriz maliyetlerden kaçının.

### Paketleme Süreci

**1. Kaliteli Paketleme Malzemeleri Kullanın**

Eşyalarınızın güvenliği için kaliteli paketleme malzemeleri kullanın. Dayanıklı kutular, kabarcıklı naylonlar, sarma kağıtları ve özel koruyucular eşyalarınızın zarar görmesini engelleyecektir.

**2. Sistematik Paketleme Yapın**

Her odayı ayrı ayrı paketleyin ve kutuların üzerine içeriğini ve hangi odaya ait olduğunu belirten etiketler yapıştırın. Bu, yeni evinizde yerleştirme sürecini hızlandıracaktır.

**3. Değerli Eşyalarınıza Özel İlgi Gösterin**

Değerli, kırılgan veya duygusal değeri olan eşyalarınızı özel olarak paketleyin. Mümkünse bu eşyaları kendiniz taşıyın.

### Taşınma Günü

**1. Önemli Belgeleri Yanınızda Bulundurun**

Kişisel belgeler, finansal dokümanlar ve değerli eşyaları yanınızda bulundurun. Bu tür eşyaları nakliye kamyonuna vermeyin.

**2. Çocuklar ve Evcil Hayvanlar İçin Düzenleme Yapın**

Taşınma günü çocuklarınız ve evcil hayvanlarınız için güvenli bir alan oluşturun veya akrabalarınızdan yardım isteyin. Taşınma süreci onlar için stresli olabilir.

**3. Taşınma Ekibine Rehberlik Edin**

Nakliyat ekibine eşyalarınızın kırılganlığı ve özel dikkat gerektiren noktaları hakkında bilgi verin. Yeni evinizde eşyaların nereye yerleştirileceğini açıkça belirtin.

### Yeni Eve Yerleşme

**1. Önce Temel İhtiyaçları Yerleştirin**

Yatak, mutfak gereçleri ve banyo malzemeleri gibi temel ihtiyaçları önce yerleştirin. Diğer eşyaları zaman içinde düzenleyebilirsiniz.

**2. Kutuları Sistematik Açın**

Her odadaki kutuları sistematik şekilde açın ve eşyaları yerleştirin. Bir odayı tamamlamadan diğerine geçmeyin.

**3. Adres Değişikliğini Bildirin**

Elektrik, su, internet gibi hizmetler için adres değişikliği bildirimlerinizi yapın. Ayrıca banka, vergi dairesi ve diğer önemli kurumlara da adres değişikliğinizi bildirin.

### Sonuç

Evden eve taşınma, iyi bir planlama ve profesyonel destek ile sorunsuz bir şekilde gerçekleştirilebilir. Horex Nakliyat olarak, İstanbul'un tüm semtlerinde güvenilir, sigortalı ve profesyonel nakliyat hizmetleri sunuyoruz. Taşınma sürecinizi kolaylaştırmak ve stressiz bir deneyim yaşamanızı sağlamak için yanınızdayız.

Taşınma ile ilgili daha fazla bilgi ve profesyonel destek için bize ulaşmaktan çekinmeyin.
`,
  },
  {
    id: 2,
    title: 'Eşyalarınızı Doğru Paketleme Teknikleri',
    slug: 'esyalarinizi-dogru-paketleme-teknikleri',
    excerpt: 'Taşınma sırasında eşyalarınızın zarar görmemesi için profesyonel paketleme teknikleri ve ipuçları.',
    coverImage: '/blog/paketleme-teknikleri.jpg',
    date: '2023-06-10',
    author: 'Horex Nakliyat Ekibi',
    content: `
## Eşyalarınız İçin Profesyonel Paketleme Teknikleri

Taşınma sürecinde en kritik aşamalardan biri, eşyalarınızın doğru şekilde paketlenmesidir. Profesyonel paketleme teknikleri, değerli eşyalarınızın güvenliğini sağlar ve taşınma sırasında oluşabilecek hasarları önler. Horex Nakliyat olarak, yılların deneyimi ile eşyalarınızı güvenle paketlemek için kullandığımız teknikleri sizinle paylaşıyoruz.

### Doğru Paketleme Malzemeleri

**1. Kaliteli Kutular**

Farklı boyutlarda dayanıklı ve yeni kutular kullanın. Eski ve yıpranmış kutular, ağır eşyaları taşırken risk oluşturabilir. Özellikle kitap ve belgeler gibi ağır eşyalar için küçük kutular tercih edin.

**2. Koruyucu Malzemeler**

- Kabarcıklı naylon: Kırılgan eşyalar için ideal koruma sağlar.
- Paketleme kağıdı: Asitsiz kağıt, özellikle porselen ve cam eşyalar için uygundur.
- Streç film: Mobilyaları çizilmelerden korur ve küçük parçaları bir arada tutar.
- Köpük koruyucular: Elektronik aletler ve köşeli mobilyalar için özelleştirilmiş koruma sağlar.
- Havlu ve battaniyeler: Ev eşyalarınızı korumak için kullanılabilir.

**3. Etiketleme Malzemeleri**

Kalın uçlu kalemler ve etiketler, kutuların içeriğini ve gideceği odayı belirtmek için gereklidir.

### Eşya Türlerine Göre Paketleme Teknikleri

**1. Kırılgan Eşyalar (Cam, Porselen, Seramik)**

- Her parçayı ayrı ayrı paketleme kağıdına sarın.
- Tabakları yatay değil dikey olarak yerleştirin.
- Kutuların dibine ve üstüne ekstra koruma için kabarcıklı naylon veya kağıt koyun.
- Eşyalar arasındaki boşluklara kağıt veya havlu yerleştirin.
- Her kutunun dışına "KIRILGAN" etiketi yapıştırın.

**2. Elektronik Eşyalar**

- Orijinal kutularını kullanın ve elektronikler için özel kutular temin edin.
- Kabloları etiketleyin ve düzenli şekilde toplayın.
- Nem önleyici silika jel paketleri ekleyin.
- Ekranları ve hassas parçaları ekstra koruyun.

**3. Mobilyalar**

- Çekmece ve kapıları bantlayın.
- Çıkarılabilir parçaları demonte edin ve bir arada saklayın.
- Köşeleri köpük koruyucularla kaplayın.
- Tüm mobilyayı streç film veya koruyucu örtülerle sarın.

**4. Kitaplar ve Belgeler**

- Küçük ve dayanıklı kutular kullanın.
- Kitapları yatay değil dikey olarak yerleştirin.
- Önemli belgeleri su geçirmez koruyucularda saklayın.

**5. Giyim Eşyaları**

- Askılı kıyafetler için gardırop kutuları kullanın.
- Kıyafetleri vakumlu torbalara yerleştirerek hacimlerini azaltın.
- Ayakkabıları çiftler halinde paketleyin ve içine kağıt yerleştirin.

### Paketleme Sürecinde İpuçları

**1. Planlı Paketleme**

- Kullanmadığınız eşyalardan başlayın.
- Her odayı ayrı ayrı paketleyin ve etiketleyin.
- Günlük kullanılan eşyaları en son paketleyin.

**2. Kutu Dolum Tekniği**

- Ağır eşyaları kutunun dibine, hafif eşyaları üste yerleştirin.
- Kutuları tamamen doldurun ancak aşırı ağır hale getirmeyin.
- Kutudaki boşlukları gazete veya kağıtla doldurun.

**3. Etiketleme Sistemi**

- Her kutunun dört yanına da etiket yapıştırın.
- Etiketlerde kutunun içeriği ve gideceği oda bilgisini belirtin.
- Kırılgan eşyalar için belirgin uyarılar ekleyin.

### Özel Eşyaların Paketlenmesi

**1. Sanat Eserleri ve Tablolar**

- Özel tablo kutuları kullanın.
- Yüzeyi asitsiz kağıtla koruyun.
- Köşelere ekstra koruma ekleyin.
- Dikey taşıyın ve "Bu Taraf Yukarı" etiketi yapıştırın.

**2. Antika ve Değerli Eşyalar**

- Profesyonel yardım alın.
- Her parçayı ayrı ayrı belgelendirin.
- Özel sigorta yaptırın.
- Ekstra koruma ile paketleyin.

### Sonuç

Doğru paketleme teknikleri, eşyalarınızın güvenliğini sağlar ve taşınma sürecini çok daha sorunsuz hale getirir. Horex Nakliyat olarak, profesyonel paketleme hizmetleri sunuyor ve eşyalarınızın yeni adresinize güvenle ulaşmasını sağlıyoruz.

Paketleme hizmetleri veya daha fazla taşınma ipucu için bizimle iletişime geçebilirsiniz. Uzman ekibimiz, tüm sorularınızı yanıtlamak ve profesyonel destek sağlamak için hazır.
`,
  },
  {
    id: 3,
    title: 'Ofis Taşıma Rehberi: İş Kaybı Yaşamadan Taşının',
    slug: 'ofis-tasima-rehberi',
    excerpt: 'İşletmenizi minimum kesinti ile yeni ofis lokasyonuna taşımanın püf noktaları ve planlama stratejileri.',
    coverImage: '/blog/ofis-tasima.jpg',
    date: '2023-07-22',
    author: 'Horex Nakliyat Ekibi',
    content: `
## Ofis Taşıma Rehberi: İş Kaybı Yaşamadan Taşının

Ofis taşıma süreci, doğru planlanmadığında işletmeniz için ciddi iş kayıplarına ve verimlilik düşüşüne neden olabilir. Horex Nakliyat olarak, iş sürekliliğini koruyarak ofis taşıma operasyonlarını başarıyla gerçekleştirmenin püf noktalarını sizinle paylaşıyoruz.

### Kapsamlı Planlama

**1. Proje Ekibi Oluşturun**

Ofis taşınması için özel bir proje ekibi oluşturun. Bu ekip, departman temsilcilerinden oluşmalı ve taşınma sürecinin her aşamasını koordine etmelidir.

**2. Detaylı Taşınma Takvimi Hazırlayın**

Taşınma sürecinin her adımını içeren detaylı bir takvim oluşturun. Bu takvim şunları içermelidir:
- Planlama ve hazırlık aşaması
- Tedarikçi seçimi
- Eşya ve doküman ayıklama
- Paketleme süreci
- Taşınma günü operasyonları
- Yeni ofise yerleşme
- Normal iş süreçlerine dönüş

**3. Bütçe Planlama**

Taşınma maliyetlerini detaylı şekilde planlayın. Nakliyat, yeni mobilya, IT altyapısı, renovasyon, geçici ofis çözümleri ve beklenmedik giderler için bütçe ayırın.

### İş Sürekliliği Stratejileri

**1. Aşamalı Taşınma Planı**

Tüm departmanları aynı anda taşımak yerine, aşamalı bir taşınma planı oluşturun. Böylece bazı departmanlar çalışmaya devam ederken diğerleri taşınabilir.

**2. Kritik Sistemlerin Önceliklendirilmesi**

İşletmenizin kritik sistemlerini ve operasyonlarını belirleyin. Bu sistemlerin minimum kesinti ile taşınmasını sağlayın.

**3. Yedekleme ve Veri Güvenliği**

Taşınmadan önce tüm verilerinizi yedekleyin. Fiziksel ve bulut tabanlı yedekleme çözümleri kullanarak veri kaybı riskini minimize edin.

**4. Geçici Çalışma Düzenlemeleri**

Taşınma süresince uzaktan çalışma imkanı, esnek çalışma saatleri veya geçici ofis alanları gibi alternatif çalışma düzenlemeleri planlayın.

### IT ve Teknolojik Altyapı Taşıma

**1. IT Departmanı ile Yakın Koordinasyon**

IT ekibinizle yakın çalışarak, sistem kesintilerini minimumda tutacak bir plan geliştirin. Kritik sistemlerin geçişi için hafta sonu veya mesai dışı saatleri tercih edin.

**2. Ağ ve İletişim Altyapısının Hazırlanması**

Yeni ofisteki ağ ve iletişim altyapısını önceden kurun ve test edin. İnternet, telefon hatları, sunucular ve diğer iletişim sistemlerinin taşınma günü hazır olmasını sağlayın.

**3. Ekipman Envanteri ve Etiketleme**

Tüm IT ekipmanlarının detaylı bir envanterini çıkarın ve her birini etiketleyin. Bu, yeni ofisteki kurulum sürecini hızlandıracaktır.

### Ofis Mobilya ve Ekipmanları

**1. Demontaj ve Montaj Planı**

Hangi mobilyaların taşınacağını, hangilerinin yenileneceğini belirleyin. Demontaj ve montaj için profesyonel destek alın.

**2. Ergonomik Düzenleme**

Yeni ofis yerleşimini ergonomi ve verimlilik ilkelerine göre planlayın. Çalışma alanlarını, toplantı odalarını ve ortak alanları iş akışına uygun şekilde düzenleyin.

### Çalışan İletişimi ve Katılımı

**1. Şeffaf İletişim**

Çalışanlarınızı taşınma sürecinin her aşamasında bilgilendirin. Taşınma nedenleri, takvimi ve çalışanlardan beklentilerinizi açıkça paylaşın.

**2. Sorumluluk Dağılımı**

Her çalışana kendi alanı ve eşyalarıyla ilgili sorumluluklar verin. Kişisel eşyaların paketlenmesi, dosyaların dijitalleştirilmesi gibi görevleri dağıtın.

### Taşınma Günü

**1. Koordinasyon Ekibi**

Taşınma günü için özel bir koordinasyon ekibi görevlendirin. Bu ekip, nakliyat firması ile iletişimi sağlamalı ve operasyonu yönetmelidir.

**2. Etiketleme ve Yönlendirme Sistemi**

Yeni ofiste etiketleme ve yönlendirme sistemi kurun. Her departman, ofis ve çalışma alanını belirgin şekilde işaretleyin.

**3. Acil Müdahale Planı**

Taşınma sırasında oluşabilecek acil durumlar için hazırlıklı olun. IT sorunları, eksik ekipmanlar veya beklenmedik gecikmeler için çözüm planları geliştirin.

### Yerleşme ve Adaptasyon

**1. Sistemlerin Test Edilmesi**

Yeni ofisteki tüm sistemleri, özellikle IT ve iletişim altyapısını detaylı şekilde test edin.

**2. Çalışan Oryantasyonu**

Çalışanlarınız için yeni ofise oryantasyon programı düzenleyin. Güvenlik prosedürleri, ofis kuralları ve ortak alanların kullanımı hakkında bilgi verin.

**3. Eksik ve Sorunların Giderilmesi**

Taşınma sonrası oluşan eksikleri ve sorunları hızla gidermek için bir takip sistemi oluşturun.

### Sonuç

Başarılı bir ofis taşıma operasyonu, detaylı planlama, iyi koordinasyon ve profesyonel destek gerektirir. Horex Nakliyat olarak, İstanbul'un tüm semtlerinde ofis taşıma hizmetleri sunuyor ve işletmenizin minimum iş kaybıyla taşınmasını sağlıyoruz.

Profesyonel ofis taşıma hizmetleri ve daha fazla bilgi için bizimle iletişime geçebilirsiniz. Uzman ekibimiz, ofis taşıma sürecinizi kolaylaştırmak için yanınızda.
`,
  },
  {
    id: 4,
    title: 'Depolama Hizmetinde Bilinmesi Gerekenler',
    slug: 'depolama-hizmetinde-bilinmesi-gerekenler',
    excerpt: 'Eşya depolama hizmeti alırken dikkat edilmesi gereken noktalar ve profesyonel depolama ipuçları.',
    coverImage: '/blog/depolama-hizmeti.jpg',
    date: '2023-08-15',
    author: 'Horex Nakliyat Ekibi',
    content: `
## Depolama Hizmetinde Bilinmesi Gerekenler

Eşya depolama ihtiyacı, taşınma, renovasyon, uzun süreli seyahat veya mevsimsel eşyalarınız için ek alan yaratma gibi çeşitli nedenlerle ortaya çıkabilir. Horex Nakliyat olarak, profesyonel depolama hizmetlerimizle eşyalarınızın güvenle korunmasını sağlıyoruz. Bu rehberimizde, depolama hizmeti alırken dikkat etmeniz gereken noktaları detaylı olarak ele alacağız.

### Depolama Türlerini Anlamak

**1. Kısa Süreli Depolama**

Genellikle 3 aya kadar olan depolama ihtiyaçları için idealdir. Taşınma aralarında, ev renovasyonu sırasında veya geçici durumlar için tercih edilir.

**2. Uzun Süreli Depolama**

3 aydan daha uzun süreli depolama ihtiyaçları için uygundur. Uzun süreli seyahatler, mevsimlik eşyalar veya uzun vadeli alan yaratma amaçlı kullanılır.

**3. İklim Kontrollü Depolama**

Hassas eşyalar, antikalar, sanat eserleri, elektronik aletler veya sıcaklık değişimlerinden etkilenebilecek eşyalar için özel sıcaklık ve nem kontrolü olan depolama üniteleridir.

**4. Özel Eşya Depolama**

Araçlar, tekneler, müzik aletleri, kıyafetler veya değerli koleksiyonlar gibi özel eşyalar için tasarlanmış depolama çözümleridir.

### Doğru Depolama Hizmetini Seçme Kriterleri

**1. Güvenlik Özellikleri**

Depolama tesisinin güvenlik önlemlerini detaylı incelemek çok önemlidir.
- 24 saat güvenlik kamerası sistemi
- Güvenlik personeli
- Giriş-çıkış kontrolü
- Yangın algılama ve söndürme sistemleri
- Su baskını koruma sistemleri
- Bireysel kilitli üniteler

**2. İklim ve Nem Kontrolü**

Özellikle hassas eşyalarınız varsa, depolama alanındaki iklim kontrolü kritik önem taşır.
- Sıcaklık kontrolü (15-25°C arası ideal)
- Nem kontrolü (%55-60 arası ideal)
- Havalandırma sistemleri
- Hava kalitesi kontrolü

**3. Erişim İmkanları**

Depolama alanınıza ne sıklıkla erişmeye ihtiyacınız olacağını belirleyin.
- 7/24 erişim imkanı
- Randevulu erişim
- Çalışma saatleri içinde erişim
- Yükleme ve boşaltma kolaylıkları

**4. Lokasyon**

Depolama tesisinin konumu, erişim sıklığınıza göre önem kazanır.
- Evinize veya iş yerinize yakınlık
- Ulaşım kolaylığı
- Güvenli bölgede olması

**5. Maliyet ve Sözleşme Koşulları**

Depolama maliyetleri ve sözleşme şartlarını detaylı incelemek, beklenmedik masraflardan kaçınmanızı sağlar.
- Aylık veya yıllık ücretler
- Depozito gereksinimleri
- Sözleşme süresi ve uzatma koşulları
- Ek hizmet ücretleri
- Sigorta maliyetleri
- İptal politikası

### Eşyalarınızı Depolamaya Hazırlama

**1. Detaylı Envanter Oluşturun**

Depolayacağınız tüm eşyaların detaylı bir listesini çıkarın. Bu liste, sigorta talebi veya eşya arama durumlarında çok faydalı olacaktır.

**2. Profesyonel Paketleme**

Eşyalarınızın uzun süreli korunması için doğru paketleme teknikleri kullanın:
- Kırılgan eşyalar için kabarcıklı naylon
- Mobilyalar için koruyucu örtüler
- Nem emici paketler
- Paslanmayı önleyici malzemeler
- Güve ve haşere önleyici ürünler

**3. Uygun Boyutta Depolama Ünitesi Seçimi**

İhtiyacınızdan küçük veya büyük depolama alanı seçmek, ekstra maliyet veya yetersiz alan sorunları yaratabilir.
- Eşyalarınızın toplam hacmini hesaplayın
- Erişim koridorları için ek alan planlayın
- Gelecekteki olası eklemeler için az miktarda ek alan bırakın

### Sigorta ve Güvenlik

**1. Depolama Sigortası**

Depolanan eşyalarınızın değerini belirlediğiniz ve bu değer üzerinden sigorta yaptırdığınız bir hizmettir.
- Tesisin sunduğu temel sigorta
- Ek sigorta seçenekleri
- Ev sigortanızın depolama kapsamı
- Özel eşya sigortası

**2. Kişisel Güvenlik Önlemleri**

Kendi güvenlik önlemlerinizi de almak, eşyalarınızın korunmasını güçlendirir.
- Kaliteli kilitler kullanımı
- Değerli eşyalar için ek koruma
- Düzenli kontrol ziyaretleri

### Profesyonel Depolama ile Kendi Kendine Depolama Farkları

**1. Profesyonel Depolama (Horex Nakliyat)**

Tam hizmet depolama çözümü sunar:
- Eşyaların adresinizden alınması
- Profesyonel paketleme
- Taşıma hizmeti
- Depolama alanına yerleştirme
- İhtiyaç duyduğunuzda teslim
- Tam güvenlik ve sigorta
- Düzenli kontrol ve bakım

**2. Kendi Kendine Depolama**

Daha ekonomik ancak daha az hizmet içerir:
- Kendi taşımanızı yapmanız gerekir
- Kendi paketleme malzemelerinizi kullanırsınız
- Depolama alanına kendi erişiminizi sağlarsınız
- Temel güvenlik önlemleri

### Özel Eşyaların Depolanması

**1. Elektronik Aletler**
- Nem gidericiler kullanın
- Orijinal kutularında saklayın
- Pilleri çıkarın
- İklim kontrollü alanda depolayın

**2. Ahşap Mobilyalar**
- Temizleyin ve cilalayın
- Mobilya örtüleri kullanın
- Demonte edebiliyorsanız parçalarına ayırın
- Direkt zemin temasından kaçının

**3. Kitaplar ve Belgeler**
- Asitsiz kutularda saklayın
- Nemden koruyun
- Yatay şekilde istifleyin
- Ağır eşyaların altına koymayın

**4. Değerli Sanat Eserleri ve Antikalar**
- Profesyonel paketleme hizmeti alın
- Özel taşıyıcılar ve koruyucular kullanın
- İklim kontrollü depolama seçin
- Ek sigorta yaptırın

### Sonuç

Doğru depolama çözümü seçmek ve eşyalarınızı profesyonel şekilde depolamak, değerli eşyalarınızın güvenliğini ve korunmasını sağlar. Horex Nakliyat olarak, İstanbul'un tüm semtlerinde profesyonel depolama hizmetleri sunuyor ve eşyalarınızın en güvenli şartlarda muhafaza edilmesini sağlıyoruz.

Depolama hizmetleri, özel eşya depolama veya daha fazla bilgi için bizimle iletişime geçebilirsiniz. Uzman ekibimiz, depolama ihtiyaçlarınıza özel çözümler sunmak için hazır.
`,
  }
];

// Function to get all blog posts
export const getAllBlogPosts = () => {
  return blogPosts;
};

// Function to get a specific blog post by slug
export const getBlogPostBySlug = (slug: string) => {
  return blogPosts.find(post => post.slug === slug);
};

// Function to get blog post slugs for static paths
export const getBlogSlugs = () => {
  return blogPosts.map(post => ({
    slug: post.slug
  }));
}; 