import { DistrictProps } from '@/components/DistrictPage';

// District data for İstanbul's important districts
export const districtData: Record<string, Omit<DistrictProps, 'districtName' | 'slug'>> = {
  'levent': {
    description: 'Levent bölgesinde profesyonel, güvenilir ve sigortalı nakliyat hizmetleri sunuyoruz. Evden eve, ofis taşıma ve eşya depolama çözümlerimizle Levent ve çevresinde hizmetinizdeyiz.',
    imagePath: '/images/districts/levent.jpg',
    content: {
      introduction: 'Levent, İstanbul\'un Beşiktaş ilçesine bağlı, modern gökdelenleri ve iş merkezleriyle tanınan prestijli bir semttir. İstanbul\'un en önemli finans ve iş merkezlerinden biri olan Levent, lüks konutları ve alışveriş merkezleriyle de bilinir. Profesyonel nakliyat ekibimiz, Levent\'teki her türlü taşıma ihtiyacınız için hizmetinizdedir.',
      services: 'Levent\'te sunduğumuz nakliyat hizmetleri, modern binaların ve iş merkezlerinin özel gereksinimlerine göre tasarlanmıştır. Yüksek katlı binalara özel asansörlü taşıma çözümlerimiz, ofis taşıma ve ev eşyalarının nakliyesi için profesyonel çözümler sunmaktayız.',
      advantages: 'Horex Nakliyat olarak Levent bölgesindeki taşımacılık deneyimimiz, bölgenin trafik yoğunluğunu ve bina özelliklerini iyi bilmemizi sağlıyor. Bu sayede size en hızlı ve güvenli nakliyat hizmetini sunabiliyoruz.',
      process: 'Levent bölgesinde gerçekleştirdiğimiz nakliye işlemlerinde, önceden planlama ve keşif büyük önem taşımaktadır. Özellikle site içi ve plazalarda gerçekleşen taşımalarda bina yönetiminden gerekli izinlerin alınması ve asansör kullanım saatlerinin planlanması hizmet sürecimizin önemli bir parçasıdır.',
      faq: [
        {
          question: 'Levent\'teki rezidans ve yüksek katlı binalarda nakliyat nasıl yapılıyor?',
          answer: 'Levent\'teki yüksek binalarda nakliyat işlemlerimizi genellikle bina asansörlerini kullanarak gerçekleştiriyoruz. Eğer bina asansörü uygun değilse veya eşyalar sığmıyorsa, dış cephe asansörü ile güvenli taşıma hizmeti sağlıyoruz.'
        },
        {
          question: 'Levent\'te ofis taşıma hizmetleri hafta sonu da yapılabiliyor mu?',
          answer: 'Evet, özellikle iş akışını etkilememesi için Levent\'teki ofis taşıma hizmetlerimizi müşterilerimizin talebi doğrultusunda hafta sonları ve mesai saatleri dışında da gerçekleştiriyoruz.'
        },
        {
          question: 'Levent bölgesinde eşya depolama hizmetiniz var mı?',
          answer: 'Evet, Levent ve çevresi için kısa ve uzun vadeli, güvenli ve iklim kontrollü depolama hizmetlerimiz mevcuttur. Eşyalarınız sigortalı olarak, güvenlik kameraları ile izlenen tesislerimizde muhafaza edilmektedir.'
        }
      ]
    }
  },
  'maslak': {
    description: 'Maslak bölgesinde evden eve nakliyat, ofis taşıma ve depolama hizmetleri sunuyoruz. İş merkezi yoğunluğuna özel çözümlerimizle Maslak\'ta güvenilir nakliyat hizmeti veriyoruz.',
    imagePath: '/images/districts/maslak.jpg',
    content: {
      introduction: 'Maslak, İstanbul\'un Sarıyer ilçesine bağlı, gökdelenleri ve plazalarıyla ünlü iş merkezlerinin yoğun olduğu bir semttir. İstanbul\'un en önemli finans ve ticaret merkezlerinden biri olan Maslak, modern ofis binaları ve rezidanslarıyla tanınır. Horex Nakliyat olarak Maslak\'ın dinamik yapısına uygun nakliyat çözümleri sunuyoruz.',
      services: 'Maslak\'ta özellikle ofis taşıma ve kurumsal nakliyat hizmetlerimiz öne çıkmaktadır. İş merkezleri için özel planlanan nakliye operasyonlarımız, minimum iş kaybı ve maksimum verimlilik sağlar. Ayrıca rezidans ve konutlara yönelik evden eve nakliyat hizmetlerimiz de mevcuttur.',
      advantages: 'Maslak bölgesinde yıllardır edindiğimiz tecrübe, bölgedeki plaza ve iş merkezi yönetimleriyle olan iyi ilişkilerimiz sayesinde nakliyat süreçlerini sorunsuz ve hızlı bir şekilde yönetiyoruz. Modern ekipmanlarımız ve eğitimli personelimizle Maslak\'taki tüm nakliyat ihtiyaçlarınıza çözüm üretiyoruz.',
      process: 'Maslak\'taki taşıma işlemlerinde öncelikli olarak plaza ve iş merkezi yönetimlerinden gerekli izinleri alıyoruz. Özellikle hafta sonu ve mesai saatleri dışında planlanan taşımalarda, bina asansörlerinin rezervasyonu ve giriş-çıkış saatlerinin optimizasyonu ile süreçleri kusursuz yönetiyoruz.',
      faq: [
        {
          question: 'Maslak\'taki ofisimizi taşırken iş sürekliliğimiz etkilenir mi?',
          answer: 'Horex Nakliyat olarak Maslak\'taki ofis taşıma operasyonlarımızı genellikle hafta sonları veya mesai saatleri dışında gerçekleştirerek iş sürekliliğinizi minimum düzeyde etkilemeyi hedefliyoruz. Ayrıca departman bazlı kademeli taşıma planlaması da sunuyoruz.'
        },
        {
          question: 'Maslak\'taki plazalarda taşıma için özel izin gerekiyor mu?',
          answer: 'Evet, Maslak\'taki çoğu plaza ve iş merkezinde taşıma işlemleri için önceden yönetimden izin alınması gerekmektedir. Bu süreci sizin adınıza biz yönetiyoruz ve gerekli tüm izinleri alarak taşıma gününde sorun yaşanmamasını sağlıyoruz.'
        },
        {
          question: 'Maslak\'ta gece geç saatlerde nakliyat yapılabiliyor mu?',
          answer: 'Evet, özellikle ofis taşımaları için Maslak bölgesinde gece geç saatlerde ve hafta sonları nakliyat hizmeti veriyoruz. Bu sayede iş akışınız etkilenmeden taşınma sürecinizi tamamlayabiliyorsunuz.'
        }
      ]
    }
  },
  'nisantasi': {
    description: 'Nişantaşı\'nda özenli ve güvenilir nakliyat hizmetleri sunuyoruz. Semtin dar sokakları ve tarihi binalarına özel çözümlerimizle eşyalarınızı güvenle taşıyoruz.',
    imagePath: '/images/districts/nisantasi.jpg',
    content: {
      introduction: 'Nişantaşı, İstanbul\'un Şişli ilçesine bağlı, lüks butikleri, kafe ve restoranlarıyla tanınan seçkin bir semttir. Tarihi binalar ve dar sokakların karakterize ettiği Nişantaşı, İstanbul\'un en prestijli semtlerinden biridir. Horex Nakliyat olarak, Nişantaşı\'nın özel yapısına uygun taşımacılık hizmetleri sunuyoruz.',
      services: 'Nişantaşı\'ndaki nakliyat hizmetlerimiz, bölgenin mimari yapısı ve ulaşım zorlukları göz önünde bulundurularak tasarlanmıştır. Dar sokaklara özel küçük araçlarımız, antika ve değerli eşyalar için özel paketleme çözümlerimiz ve profesyonel ekibimizle hizmetinizdeyiz.',
      advantages: 'Nişantaşı\'nın tarihi dokusu ve dar sokakları nedeniyle oluşabilecek zorlukları aşmak için yerel bilgiye sahip ekiplerimiz, özel ekipmanlarımız ve esneklik sağlayan araç filomuzla hizmet veriyoruz. Lüks ve antika eşyaların taşınmasında uzmanlaşmış ekibimiz, değerli eşyalarınızı özenle taşır.',
      process: 'Nişantaşı bölgesindeki nakliyat işlemlerinde, lokasyonun özelliklerine göre detaylı bir ön keşif yapıyoruz. Dar sokaklar ve park kısıtlamaları nedeniyle belediyeden gerekli izinleri alıyor, taşıma gününü ve saatini trafik yoğunluğuna göre planlıyoruz.',
      faq: [
        {
          question: 'Nişantaşı\'ndaki dar sokaklara büyük eşyalar nasıl taşınıyor?',
          answer: 'Nişantaşı\'nın dar sokaklarına uygun boyutlarda araçlar kullanıyor, gerektiğinde eşyaları özel ekipmanlarla bina dışından yukarı katlara taşıyabiliyoruz. Her duruma özel çözümler üretiyoruz.'
        },
        {
          question: 'Antika ve değerli eşyalarımın taşınmasında ekstra önlemler alıyor musunuz?',
          answer: 'Evet, Nişantaşı\'nda sıkça karşılaştığımız antika ve değerli eşyalar için özel paketleme malzemeleri ve teknikleri kullanıyoruz. Bu eşyalar ayrıca ekstra sigorta kapsamında taşınabilmektedir.'
        },
        {
          question: 'Nişantaşı\'nda araç park sorununu nasıl çözüyorsunuz?',
          answer: 'Taşıma öncesinde belediyeden geçici park izni alıyor, gerektiğinde trafik yönlendirme personeli ile çalışıyoruz. Böylece nakliyat sürecinde oluşabilecek park ve trafik sorunlarını en aza indiriyoruz.'
        }
      ]
    }
  },
  'etiler': {
    description: 'Etiler\'de profesyonel nakliyat ve taşımacılık hizmetleri sunuyoruz. Lüks rezidanslar ve siteler için özel çözümlerimizle eşyalarınızı yeni adresinize güvenle taşıyoruz.',
    imagePath: '/images/districts/etiler.jpg',
    content: {
      introduction: 'Etiler, İstanbul\'un Beşiktaş ilçesine bağlı, lüks konutları, nezih siteleri ve canlı sosyal yaşamıyla bilinen prestijli bir semttir. Boğaz manzaralı evleri ve modern yapılarıyla dikkat çeken Etiler, İstanbul\'un en değerli yerleşim alanlarından biridir. Horex Nakliyat olarak Etiler\'in özel yapısına uygun nakliyat hizmetleri sunmaktayız.',
      services: 'Etiler\'de sunduğumuz nakliyat hizmetleri arasında evden eve nakliyat, rezidans taşıma, ofis taşıma ve eşya depolama yer almaktadır. Özellikle lüks konutlar ve rezidanslar için geliştirilmiş özel paketleme teknikleri ve taşıma çözümleri sunuyoruz.',
      advantages: 'Etiler\'deki nakliyat operasyonlarımızda, semtin mimari yapısı ve site düzenine uygun çözümler geliştirdik. Site yönetimleriyle olan iyi ilişkilerimiz, asansör kullanımı ve taşıma izinleri konusunda avantaj sağlar. Değerli eşyaların taşınmasında uzmanlaşmış ekibimiz, tüm eşyalarınızı sigortalı ve güvenli şekilde taşır.',
      process: 'Etiler\'deki nakliyat sürecimiz, detaylı bir keşif ve planlama ile başlar. Site yönetimlerinden gerekli izinlerin alınması, asansör rezervasyonu ve uygun taşıma saatlerinin belirlenmesi sonrasında, profesyonel ekibimiz eşyalarınızı özenle paketleyerek yeni adresinize taşır ve yerleştirir.',
      faq: [
        {
          question: 'Etiler\'deki site ve rezidanslarda taşıma için özel prosedürler var mı?',
          answer: 'Evet, Etiler\'deki birçok site ve rezidansta taşıma işlemleri için yönetimden izin alınması ve belirli saatlerde çalışılması gerekiyor. Bu süreçleri sizin adınıza biz yönetiyor ve tüm izinleri alarak sorunsuz bir taşınma süreci sağlıyoruz.'
        },
        {
          question: 'Etiler\'de eşya depolama hizmetiniz var mı?',
          answer: 'Evet, Etiler ve çevresi için kısa ve uzun vadeli, modern ve güvenli depolama hizmetlerimiz mevcuttur. Eşyalarınız iklim kontrollü tesislerimizde, sigortalı olarak muhafaza edilmektedir.'
        },
        {
          question: 'Boğaz manzaralı, yüksek katlı evlere taşınma süreci nasıl yönetiliyor?',
          answer: 'Etiler\'deki eğimli arazi yapısı ve yüksek katlı evlere taşınma sürecinde, profesyonel dış cephe asansörlerimiz ve deneyimli ekibimizle sorunsuz bir taşıma hizmeti sunuyoruz. Özellikle büyük ve ağır eşyalar için özel taşıma çözümleri geliştiriyoruz.'
        }
      ]
    }
  },
  'bebek': {
    description: 'Bebek\'te deneyimli ekibimizle nakliyat hizmetleri sunuyoruz. Boğaz kıyısındaki bu güzel semtte, eğimli ve dar yollara özel çözümlerimizle eşyalarınızı güvenle taşıyoruz.',
    imagePath: '/images/districts/bebek.jpg',
    content: {
      introduction: 'Bebek, İstanbul Boğazı\'nın Avrupa yakasında, Beşiktaş ilçesine bağlı tarihi ve turistik bir semttir. Boğaz\'ın en güzel koylarından birine sahip olan Bebek, lüks yalıları, şık restoranları ve kafeteryalarıyla İstanbul\'un en seçkin semtlerinden biridir. Horex Nakliyat olarak Bebek\'in coğrafi yapısına ve mimari dokusuna uygun nakliyat çözümleri sunuyoruz.',
      services: 'Bebek\'teki nakliyat hizmetlerimiz, bölgenin eğimli yapısı, dar sokakları ve tarihi binaları göz önüne alınarak özel olarak tasarlanmıştır. Ev taşıma, yalı taşıma, antika ve değerli eşya taşıma konularında uzmanlaşmış ekibimizle hizmetinizdeyiz.',
      advantages: 'Bebek\'in eğimli ve dar sokakları nedeniyle oluşabilecek taşıma zorluklarını aşmak için yerel bilgiye sahip, deneyimli personelimiz ve özel ekipmanlarımız bulunmaktadır. Tarihi yalılar ve değerli eşyaların taşınması konusunda özel uzmanlığımız, size güvenli ve sorunsuz bir nakliyat deneyimi sağlar.',
      process: 'Bebek\'teki nakliyat sürecimiz, bölgenin özelliklerine göre yapılan detaylı bir keşif ile başlar. Dar sokaklar ve park kısıtlamaları için belediyeden gerekli izinleri alıyor, eğimli yollarda güvenli taşıma için özel ekipmanlar kullanıyoruz. Özellikle yalı taşımalarında, deniz yoluyla ulaşım gibi alternatif çözümler de sunabiliyoruz.',
      faq: [
        {
          question: 'Bebek\'teki dar ve eğimli yollarda büyük eşyaları nasıl taşıyorsunuz?',
          answer: 'Bebek\'in zorlu topografyasına uygun küçük ve manevra kabiliyeti yüksek araçlar kullanıyoruz. Gerektiğinde parça parça taşıma veya özel vinç sistemleri ile eşyalarınızı güvenle yeni adresinize ulaştırıyoruz.'
        },
        {
          question: 'Tarihi yalılarda taşıma sırasında binaya zarar verme riski var mı?',
          answer: 'Horex Nakliyat olarak tarihi yapılarda taşıma konusunda özel eğitimli personelimiz ve koruyucu ekipmanlarımızla binaya hiçbir zarar vermeden taşıma yapıyoruz. Ayrıca tüm operasyonlarımız kapsamlı sigorta poliçeleri ile korunmaktadır.'
        },
        {
          question: 'Bebek\'te park sorunu yaşanıyor mu, çözümünüz nedir?',
          answer: 'Bebek\'teki taşımalarda yaşanabilecek park sorunları için önceden belediyeden geçici park izni alıyor ve gerektiğinde trafik yönlendirme personeli ile çalışıyoruz. Bazı durumlarda, deniz yoluyla taşıma gibi alternatif çözümler de sunabiliyoruz.'
        }
      ]
    }
  },
  'ortakoy': {
    description: 'Ortaköy\'de profesyonel nakliyat ve taşımacılık hizmetleri. Boğaz kıyısındaki bu tarihi semtte dar sokaklar ve eğimli yollara özel çözümlerle eşyalarınızı güvenle taşıyoruz.',
    imagePath: '/images/districts/ortakoy.jpg',
    content: {
      introduction: 'Ortaköy, İstanbul\'un Beşiktaş ilçesine bağlı, Boğaz kıyısında yer alan, tarihi camisi ve meydanıyla meşhur bir semttir. Kültürel zenginliği, sahil şeridi ve renkli gece hayatıyla turistlerin ve İstanbulluların uğrak noktası olan Ortaköy, aynı zamanda dar sokakları ve eğimli yapısıyla bilinir. Horex Nakliyat olarak Ortaköy\'ün kendine has yapısına uygun nakliyat hizmetleri sunmaktayız.',
      services: 'Ortaköy\'deki nakliyat hizmetlerimiz, bölgenin tarihi dokusu ve coğrafi yapısı dikkate alınarak tasarlanmıştır. Dar sokaklara özel küçük araçlar, tarihi ve hassas eşyalar için özel paketleme çözümleri, yalı ve konak taşımaları için uzmanlaşmış ekibimizle hizmetinizdeyiz.',
      advantages: 'Ortaköy\'ün dar ve tarihi sokakları, eğimli yapısı ve trafik yoğunluğu nakliyat sürecinde özel çözümler gerektirmektedir. Deneyimli ekibimiz, Ortaköy\'ün her köşesini tanıyor ve en zorlu noktalarda bile sorunsuz taşıma hizmeti sunabiliyor. Tüm eşyalarınız sigortalı olarak taşınmakta ve paketsiz tek bir parça bile taşınmamaktadır.',
      process: 'Ortaköy\'deki nakliyat sürecimiz detaylı bir ön keşif ile başlar. Taşınacak evin veya işyerinin konumu, sokak genişliği, park imkanları ve bina özellikleri değerlendirilir. Keşif sonrasında size özel bir taşıma planı oluşturulur. Gerekli yasal izinler alınır ve taşıma gününde profesyonel ekibimiz tüm eşyalarınızı özenle paketleyerek yeni adresinize taşır.',
      faq: [
        {
          question: 'Ortaköy\'deki tarihi binalara eşya taşırken özel önlemler alıyor musunuz?',
          answer: 'Evet, Ortaköy\'deki tarihi yapılara taşıma yaparken binaya ve eşyalara zarar vermemek için özel koruyucu ekipmanlar kullanıyoruz. Dar merdivenlerde ve kapı geçişlerinde özel tekniklerle eşyaları güvenle taşıyor, gerektiğinde modüler taşıma yöntemleri uyguluyoruz.'
        },
        {
          question: 'Ortaköy\'de hafta sonu taşıma yapıyor musunuz?',
          answer: 'Evet, Ortaköy\'ün hafta sonları turistik açıdan yoğun olduğunu biliyoruz. Bu nedenle müşterilerimize genellikle hafta içi taşınmalarını öneriyoruz, ancak ihtiyaç halinde hafta sonu taşımaları için de özel planlama yaparak hizmet veriyoruz.'
        },
        {
          question: 'Ortaköy\'deki park ve trafik sorununu nasıl çözüyorsunuz?',
          answer: 'Ortaköy\'ün trafik ve park sorunu için önceden belediyeden geçici park izni alıyor ve taşıma saatini düşük yoğunluklu saatlere göre planlıyoruz. Gerektiğinde trafik yönlendirme personeli ile çalışıyor ve büyük eşyaların taşınması için sokağın uygun bölümlerinde geçici durma alanları oluşturuyoruz.'
        }
      ]
    }
  },
  'mecidiyekoy': {
    description: 'Mecidiyeköy\'de güvenilir ve hızlı nakliyat hizmetleri. İş merkezleri ve konutların yoğun olduğu bu merkezi semtte özel çözümlerimizle evden eve ve ofis taşıma hizmetleri sunuyoruz.',
    imagePath: '/images/districts/mecidiyekoy.jpg',
    content: {
      introduction: 'Mecidiyeköy, İstanbul\'un Şişli ilçesinde yer alan, iş merkezleri, plazalar ve konutların yoğun olduğu merkezi bir semttir. İstanbul\'un en önemli ticaret ve ulaşım noktalarından biri olan Mecidiyeköy, metro, metrobüs ve otobüs hatlarının kesişim noktasında bulunması nedeniyle sürekli bir hareketlilik içindedir. Horex Nakliyat olarak Mecidiyeköy\'ün bu dinamik yapısına uygun nakliyat çözümleri sunuyoruz.',
      services: 'Mecidiyeköy\'de özellikle ofis taşıma ve evden eve nakliyat hizmetlerimiz öne çıkmaktadır. İş merkezlerindeki ofisler için minimum kesinti ilkesiyle çalışırken, rezidans ve apartman dairelerine taşıma yaparken bina kurallarına uygun, hızlı ve güvenli hizmet sunuyoruz. Ayrıca kısa ve uzun süreli depolama hizmetlerimiz de bulunmaktadır.',
      advantages: 'Mecidiyeköy\'ün yoğun trafik yapısını ve iş merkezlerinin çalışma düzenini iyi biliyoruz. Bu bilgi, taşıma operasyonlarımızı en uygun zaman dilimlerinde ve en verimli şekilde planlamamıza olanak tanıyor. Profesyonel ekibimiz, plaza ve rezidans yönetimleriyle olan iyi ilişkilerimiz sayesinde gerekli izinleri hızlıca alarak taşıma sürecinizi sorunsuz hale getiriyor.',
      process: 'Mecidiyeköy\'deki nakliyat sürecimiz, detaylı bir ön keşif ile başlar. Özellikle ofis taşımalarında, iş sürekliliğini etkilemeyecek bir plan oluşturulur. Taşıma günü için gerekli tüm izinler ve asansör rezervasyonları önceden yapılır. Paketleme, taşıma ve kurulum aşamaları profesyonel ekibimiz tarafından titizlikle yürütülür.',
      faq: [
        {
          question: 'Mecidiyeköy\'deki plazalarda ofis taşıma için özel kurallar var mı?',
          answer: 'Evet, Mecidiyeköy\'deki çoğu plazada taşıma işlemleri için yönetimden izin alınması, belirli saatlerde ve belirlenen asansörlerin kullanılması gibi kurallar bulunmaktadır. Horex Nakliyat olarak bu süreçleri sizin adınıza yönetiyor ve tüm gerekli izinleri alarak sorunsuz bir taşınma süreci sağlıyoruz.'
        },
        {
          question: 'Mecidiyeköy\'ün yoğun trafiğinde taşıma ne kadar sürer?',
          answer: 'Mecidiyeköy\'ün trafik yoğunluğunu göz önünde bulundurarak genellikle sabah erken saatlerde veya akşam geç saatlerde nakliyat hizmetlerimizi sunuyoruz. Bu şekilde taşıma süresini minimumda tutarak hızlı ve verimli bir hizmet sağlıyoruz. Ayrıca rota planlaması yaparak alternatif yollardan gitmeyi tercih ediyoruz.'
        },
        {
          question: 'Mecidiyeköy\'deki küçük ofisimizi taşırken iş kaybı yaşar mıyız?',
          answer: 'Horex Nakliyat olarak özellikle iş yerlerinin taşınmasında, iş kaybını en aza indirmek için gerekli tüm önlemleri alıyoruz. Hafta sonu taşıma, mesai saatleri dışında çalışma veya departman bazlı kademeli taşıma gibi seçeneklerle işletmenizin sürekliliğini koruyoruz.'
        }
      ]
    }
  },
  'fulya': {
    description: 'Fulya\'da profesyonel ve güvenilir nakliyat hizmetleri. Şişli\'nin bu nezih semtinde ev ve ofis taşıma, eşya depolama çözümleriyle hizmetinizdeyiz.',
    imagePath: '/images/districts/fulya.jpg',
    content: {
      introduction: 'Fulya, İstanbul\'un Şişli ilçesine bağlı, Mecidiyeköy ile Beşiktaş arasında yer alan, nezih ve sakin bir semttir. Modern konut projeleri, plazalar ve iş merkezlerinin yanı sıra, küçük esnaf ve mahalle kültürünün de korunduğu bu bölge, şehrin merkezinde olmasına rağmen göreceli olarak daha sakin bir yaşam sunmaktadır. Horex Nakliyat olarak Fulya\'nın bu özel karakterine uygun nakliyat hizmetleri vermekteyiz.',
      services: 'Fulya semtinde sunduğumuz başlıca hizmetler arasında evden eve nakliyat, ofis taşıma, parça eşya taşıma ve eşya depolama bulunmaktadır. Modern rezidanslarda ve apartmanlarda yaşayanlar için özel taşıma çözümleri, plazalardaki ofisler için iş sürekliliğini gözeten taşıma planları sunuyoruz.',
      advantages: 'Fulya\'nın apartman ve site yapısını, sokak genişliklerini ve trafik düzenini iyi bilen ekibimiz, taşınma sürecinizi en hızlı ve sorunsuz şekilde yönetebilmektedir. Yüksek katlı binalarda asansör kullanımı konusundaki tecrübemiz, büyük eşyalarınızın güvenle taşınmasını sağlar. Ayrıca tüm eşyalarınız taşıma sigortası kapsamında olup, maksimum güvenle taşınmaktadır.',
      process: 'Fulya\'daki nakliyat sürecimiz, adresinizde yapılan ücretsiz keşif ile başlar. Eşya miktarı, bina özellikleri ve özel talepleriniz doğrultusunda size özel bir taşıma planı oluşturulur. Taşıma günü profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve yerleştirir.',
      faq: [
        {
          question: 'Fulya\'daki dar sokaklarda büyük eşyaların taşınması nasıl yapılıyor?',
          answer: 'Fulya\'daki bazı sokakların dar olduğunu biliyoruz. Bu nedenle taşıma öncesi keşif sırasında sokak genişliğini değerlendiriyor ve buna uygun boyutta araçlar kullanıyoruz. Gerektiğinde eşyaları parçalara ayırıp taşıma veya özel kaldıraç sistemleri kullanma gibi çözümlerimiz bulunmaktadır.'
        },
        {
          question: 'Fulya\'daki rezidanslarda taşınma için özel izinler gerekiyor mu?',
          answer: 'Evet, Fulya\'daki çoğu modern rezidans ve sitede taşınma işlemleri için yönetimden izin alınması ve belirli kurallara uyulması gerekmektedir. Horex Nakliyat olarak bu izinleri sizin adınıza alıyor ve tüm site kurallarına uygun şekilde taşıma yapıyoruz.'
        },
        {
          question: 'Fulya\'da hafta sonu taşınmak mümkün mü?',
          answer: 'Evet, Fulya bölgesinde hafta sonu taşınma hizmetimiz bulunmaktadır. Hatta çoğu müşterimiz, iş kaybı yaşamamak ve bina içinde daha rahat hareket edebilmek için hafta sonu taşınmayı tercih etmektedir. Yine de site veya bina yönetiminin kurallarına göre izin alınması gerekebilir.'
        }
      ]
    }
  },
  'acibadem': {
    description: 'Acıbadem\'de profesyonel nakliyat ve taşımacılık hizmetleri. Anadolu yakasının bu nezih semtinde evden eve, ofis taşıma ve eşya depolama çözümleriyle hizmetinizdeyiz.',
    imagePath: '/images/districts/acibadem.jpg',
    content: {
      introduction: 'Acıbadem, İstanbul\'un Üsküdar ilçesine bağlı, Anadolu yakasının merkezi konumunda yer alan, köklü ve nezih bir semttir. Adını bölgede yetişen acıbadem ağaçlarından alan semt, sakin sokakları, modern siteleri ve güçlü mahalle kültürüyle bilinir. Aynı zamanda hastaneleri ve eğitim kurumlarıyla da öne çıkan Acıbadem, İstanbul\'un en değerli yerleşim alanlarından biridir. Horex Nakliyat olarak Acıbadem\'in özel yapısına uygun nakliyat hizmetleri sunuyoruz.',
      services: 'Acıbadem\'de sunduğumuz nakliyat hizmetleri arasında evden eve nakliyat, ofis taşıma, hastane ve sağlık kuruluşları için özel taşıma çözümleri ve eşya depolama yer almaktadır. Özellikle hassas tıbbi cihazların taşınması konusunda uzmanlaşmış ekibimiz, medikal kurumların taşınmasında da profesyonel hizmet vermektedir.',
      advantages: 'Acıbadem\'deki nakliyat operasyonlarımızda semtin apartman ve site yapısına, sokak genişliklerine uygun çözümler sunuyoruz. Üsküdar-Kadıköy aksında geniş bir deneyime sahip ekibimiz, bölgedeki trafik durumunu ve alternatif yolları iyi bildiği için zaman kaybı yaşanmadan taşımalar gerçekleştirilmektedir. Ayrıca değerli ve hassas eşyaların taşınmasında uzmanlaşmış ekibimiz, bu tür eşyaları özel paketleme teknikleriyle güvenle taşımaktadır.',
      process: 'Acıbadem\'deki nakliyat sürecimiz, ücretsiz keşif hizmetiyle başlar. Taşınacak eşyaların miktarı, bina özellikleri ve özel talepleriniz doğrultusunda bir plan oluşturulur. Taşıma gününde profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve yerleştirir. Özellikle Acıbadem\'deki hastaneler için gerçekleştirilen taşımalarda, sterilizasyon ve hijyen kurallarına maksimum uyum sağlanır.',
      faq: [
        {
          question: 'Acıbadem\'deki sağlık kuruluşlarının taşınmasında özel önlemler alıyor musunuz?',
          answer: 'Evet, Acıbadem bölgesinde yoğun olarak bulunan sağlık kuruluşlarının taşınması konusunda özel eğitimli personelimiz ve sterilizasyon kurallarına uygun ekipmanlarımız bulunmaktadır. Tıbbi cihazlar ve hassas sağlık ekipmanları için özel paketleme ve taşıma teknikleri kullanmaktayız.'
        },
        {
          question: 'Acıbadem\'deki taşınmalarda trafik sorunu yaşanıyor mu?',
          answer: 'Acıbadem, Anadolu yakasının merkezi bir noktasında yer alması nedeniyle özellikle belirli saatlerde trafik yoğunluğu yaşanabilmektedir. Bu nedenle nakliyat operasyonlarımızı genellikle trafik yoğunluğunun az olduğu sabah erken veya akşam geç saatlerde planlamaktayız. Ayrıca, alternatif güzergahları da değerlendirerek en hızlı ve güvenli taşımayı gerçekleştiriyoruz.'
        },
        {
          question: 'Acıbadem\'deki yeni sitelerde asansör kullanımı için özel izinler gerekiyor mu?',
          answer: 'Evet, Acıbadem\'deki modern sitelerin çoğunda taşınma işlemleri için site yönetiminden izin alınması ve asansör kullanımı için önceden rezervasyon yapılması gerekmektedir. Horex Nakliyat olarak bu izinleri sizin adınıza alıyor ve tüm site kurallarına uygun şekilde taşıma hizmeti veriyoruz.'
        }
      ]
    }
  },
  'kozyatagi': {
    description: 'Kozyatağı\'nda profesyonel nakliyat ve taşımacılık hizmetleri. Anadolu yakasının bu modern iş ve yaşam merkezinde evden eve, ofis taşıma ve eşya depolama çözümleriyle yanınızdayız.',
    imagePath: '/images/districts/kozyatagi.jpg',
    content: {
      introduction: 'Kozyatağı, İstanbul\'un Kadıköy ilçesine bağlı, Anadolu yakasının önemli iş ve yaşam merkezlerinden biridir. Modern plaza ve iş merkezleri, alışveriş merkezleri ve lüks konut projeleriyle tanınan Kozyatağı, E-5 karayolu ve metro hattına yakınlığıyla da ulaşım açısından stratejik bir konumdadır. Aynı zamanda nezih bir yaşam alanı olan Kozyatağı, hem iş hem de aile hayatı için tercih edilen bir semt haline gelmiştir. Horex Nakliyat olarak Kozyatağı\'nın bu dinamik yapısına uygun nakliyat çözümleri sunmaktayız.',
      services: 'Kozyatağı\'nda sunduğumuz başlıca hizmetler arasında ofis taşıma, evden eve nakliyat, kurumsal taşımacılık ve eşya depolama yer almaktadır. İş merkezlerinin yoğun olduğu bu bölgede özellikle ofis taşıma hizmetlerimiz öne çıkmaktadır. Ayrıca modern konut projelerinde yaşayan müşterilerimiz için de özel çözümler sunmaktayız.',
      advantages: 'Kozyatağı\'nın iş merkezi yapısını ve konut projelerinin özelliklerini iyi bilen ekibimiz, taşınma sürecinizi en verimli şekilde yönetebilmektedir. Ofis taşımalarında iş sürekliliğini korumak için hafta sonu ve mesai dışı saatlerde hizmet vermekteyiz. Ayrıca plazaların kurallarına ve asansör kullanım şartlarına hakimiyetimiz, nakliyat sürecinin sorunsuz ilerlemesini sağlamaktadır.',
      process: 'Kozyatağı\'ndaki nakliyat sürecimiz, ücretsiz keşif hizmeti ile başlar. Özellikle ofis taşımalarında, taşınacak malzemelerin envanteri çıkarılır ve departman bazlı bir taşıma planı oluşturulur. Bina yönetiminden gerekli izinler alınır ve taşıma planı oluşturulur. Taşıma günü, profesyonel ekibimiz tüm ofis veya ev eşyalarını özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve özenle yerleştirir.',
      faq: [
        {
          question: 'Kozyatağı\'ndaki plaza ofisimizi hafta içi taşıyabilir miyiz yoksa hafta sonu mu taşınmalıyız?',
          answer: 'Kozyatağı\'ndaki çoğu plaza ve iş merkezi, taşınma işlemlerinin iş saatleri dışında veya hafta sonu gerçekleştirilmesini tercih etmektedir. Bu şekilde hem diğer ofislerin çalışmaları etkilenmemekte hem de asansör ve ortak alanların daha rahat kullanılması mümkün olmaktadır. Horex Nakliyat olarak 7/24 hizmet vermekte ve müşterilerimizin tercihine göre taşıma planları oluşturmaktayız.'
        },
        {
          question: 'Kozyatağı\'ndaki ofis taşımasında IT ekipmanları için özel önlemler alıyor musunuz?',
          answer: 'Evet, Kozyatağı\'ndaki ofis taşımalarında sıkça karşılaştığımız IT ve elektronik ekipmanların taşınması için özel paketleme malzemeleri ve anti-statik koruma önlemleri kullanmaktayız. Sunucu, bilgisayar ve diğer elektronik cihazlar için ayrı taşıma kutuları ve şok emici malzemeler kullanıyor, gerektiğinde bu ekipmanların söküm ve kurulumunu da gerçekleştiriyoruz.'
        },
        {
          question: 'Kozyatağı\'ndan şehir dışına taşınma hizmetiniz var mı?',
          answer: 'Evet, Kozyatağı\'ndan Türkiye\'nin tüm illerine taşıma hizmeti vermekteyiz. Şehirlerarası taşımalarda, eşyalarınız daha yoğun ve güvenli şekilde paketlenir, araçlarımız kapalı kasa ve yol emniyeti için gerekli tüm donanıma sahip olarak hizmet verir. Ayrıca şehirlerarası nakliyatta eşyalarınızın sigortalanması ve GPS ile takibi standart hizmetlerimiz arasında yer almaktadır.'
        }
      ]
    }
  },
  'bostanci': {
    description: 'Bostancı\'da güvenilir nakliyat ve taşımacılık hizmetleri. Kadıköy\'ün bu merkezi semtinde evden eve, ofis taşıma ve eşya depolama çözümleriyle hizmetinizdeyiz.',
    imagePath: '/images/districts/bostanci.jpg',
    content: {
      introduction: 'Bostancı, İstanbul\'un Kadıköy ilçesine bağlı, Marmara Denizi kıyısında yer alan, merkezi konumuyla öne çıkan bir semttir. Sahil şeridi, merkezi konumu ve gelişmiş ulaşım ağı ile hem yerleşim hem de ticaret açısından tercih edilen Bostancı, aynı zamanda işlek caddelerinde yer alan mağazaları ve kafe-restoranlarıyla da canlı bir sosyal hayat sunmaktadır. Horex Nakliyat olarak Bostancı\'nın dinamik yapısına uygun nakliyat hizmetleri sunmaktayız.',
      services: 'Bostancı\'da sunduğumuz nakliyat hizmetleri arasında evden eve nakliyat, ofis taşıma, sahil şeridindeki işletmeler için özel çözümler ve eşya depolama yer almaktadır. Bostancı\'daki apartmanların çoğunlukla eski yapılar olduğunu bildiğimiz için dar merdiven ve kapı geçişleri için özel çözümler geliştirdik. Ayrıca sahil şeridindeki işletmelerin taşınması konusunda da uzmanlaşmış durumdayız.',
      advantages: 'Bostancı\'nın merkezi konumu ve trafik durumunu iyi bilen ekibimiz, taşınma sürecinizi en hızlı ve verimli şekilde yönetebilmektedir. Sahil yolu ve E-5\'e yakınlığı sayesinde şehrin farklı bölgelerine kolay erişim sağlanabilmektedir. Eski apartmanlarda bulunan dar merdivenler ve kapılar için modüler taşıma teknikleri ve özel ekipmanlarımız bulunmaktadır. Ayrıca tüm eşyalarınız profesyonel malzemelerle paketlenerek sigortalı şekilde taşınmaktadır.',
      process: 'Bostancı\'daki nakliyat sürecimiz, ücretsiz keşif hizmeti ile başlar. Taşınacak evin veya işyerinin özellikleri değerlendirilir, eşya miktarı belirlenir ve taşıma için uygun araç ve ekip planlaması yapılır. Taşıma günü, profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve yerleştirir. Özellikle Bostancı\'daki eski binalarda taşıma yaparken, binaya zarar vermemek için özel koruyucu önlemler alınmaktadır.',
      faq: [
        {
          question: 'Bostancı\'daki eski apartmanlarda büyük mobilyaların taşınması nasıl yapılıyor?',
          answer: 'Bostancı\'daki eski yapıların dar merdiven ve kapı genişlikleri için özel çözümlerimiz bulunmaktadır. Büyük mobilyalar genellikle demonte edilebiliyorsa parçalara ayrılarak taşınır. Demonte edilemeyen mobilyalar için ise özel vinç sistemleri veya balkondan taşıma yöntemleri kullanılabilmektedir. Her durumda, eşyanın ve binanın zarar görmemesi için gerekli tüm önlemler alınmaktadır.'
        },
        {
          question: 'Bostancı\'daki sahil şeridinde bulunan kafemizi taşımak istiyoruz, bu konuda deneyiminiz var mı?',
          answer: 'Evet, Bostancı sahil şeridindeki işletmelerin taşınması konusunda geniş deneyime sahibiz. Kafe, restoran ve mağaza gibi işletmelerin özel ekipmanlarının taşınması için uzman personelimiz ve uygun taşıma araçlarımız bulunmaktadır. Ayrıca, işletmenizin en kısa sürede faaliyete geçebilmesi için hızlı ve planlı bir taşıma süreci yönetiyoruz.'
        },
        {
          question: 'Bostancı\'daki evimizden sadece birkaç parça eşya taşıtmak istiyoruz, bu mümkün mü?',
          answer: 'Evet, Horex Nakliyat olarak Bostancı bölgesinde parça eşya taşıma hizmeti de vermekteyiz. Tek bir mobilya, beyaz eşya veya birkaç koli gibi az miktarda eşyanın taşınması için ekonomik çözümlerimiz bulunmaktadır. Bu hizmetimiz özellikle öğrenciler, yeni evlenenler veya dairesini yenileyen müşterilerimiz tarafından sıkça tercih edilmektedir.'
        }
      ]
    }
  },
  'caddebostan': {
    description: 'Caddebostan\'da profesyonel ve özenli nakliyat hizmetleri. Kadıköy\'ün bu prestijli semtinde evden eve, ofis taşıma ve eşya depolama çözümleriyle hizmetinizdeyiz.',
    imagePath: '/images/districts/caddebostan.jpg',
    content: {
      introduction: 'Caddebostan, İstanbul\'un Kadıköy ilçesine bağlı, Marmara Denizi kıyısında yer alan, lüks konutları, sahil şeridi ve alışveriş caddeleriyle tanınan prestijli bir semttir. İstanbul\'un en değerli yerleşim alanlarından biri olan Caddebostan, nezih yapısı, plajları ve sosyal yaşamıyla öne çıkmaktadır. Horex Nakliyat olarak Caddebostan\'ın bu özel karakterine uygun, kaliteli ve özenli nakliyat hizmetleri sunmaktayız.',
      services: 'Caddebostan\'da sunduğumuz nakliyat hizmetleri arasında evden eve nakliyat, ofis taşıma, antika ve değerli eşya taşıma, sanat eserleri taşıma ve eşya depolama yer almaktadır. Lüks konutların yoğun olduğu bu semtte, değerli ve hassas eşyaların taşınması konusunda uzmanlaşmış ekibimizle hizmet vermekteyiz. Ayrıca sahil şeridindeki işletmeler için de özel taşıma çözümleri sunuyoruz.',
      advantages: 'Caddebostan\'ın apartman ve site yapısını, sokak genişliklerini ve trafik durumunu iyi bilen ekibimiz, taşınma sürecinizi en sorunsuz şekilde yönetebilmektedir. Lüks ve antika eşyaların taşınmasında kullandığımız özel paketleme malzemeleri ve teknikleri, eşyalarınızın güvenliğini maksimum seviyede sağlamaktadır. Ayrıca, değerli eşyalarınız ek sigorta kapsamında taşınabilmekte ve geniş depolama alanlarımızda güvenle muhafaza edilebilmektedir.',
      process: 'Caddebostan\'daki nakliyat sürecimiz, ücretsiz ve detaylı bir keşif hizmeti ile başlar. Değerli eşyalarınız tespit edilir ve özel paketleme ihtiyaçları belirlenir. Bina özellikleri, asansör durumu ve park imkanları değerlendirilir. Taşıma günü, profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve özenle yerleştirir. Özellikle antika mobilya ve sanat eserleri gibi değerli eşyalar için uzman personelimiz tarafından özel koruma önlemleri alınmaktadır.',
      faq: [
        {
          question: 'Caddebostan\'daki evimizde bulunan antika eşyalar ve sanat eserleri için nasıl bir koruma sağlıyorsunuz?',
          answer: 'Caddebostan\'da sıkça karşılaştığımız antika mobilya, porselen ürünler ve sanat eserleri için özel koruyucu malzemeler ve paketleme teknikleri kullanmaktayız. Bu tür değerli eşyalar için asitsiz kağıt, hava kabarcıklı naylonlar, özel köpük destekler ve ahşap taşıma kasaları gibi profesyonel çözümlerimiz bulunmaktadır. Ayrıca bu eşyaların taşınması için özel eğitimli personelimiz görevlendirilmekte ve ek sigorta teminatı sağlanmaktadır.'
        },
        {
          question: 'Caddebostan\'daki sahil sitelerinde taşınma için özel kurallar var mı?',
          answer: 'Evet, Caddebostan\'daki özellikle sahil şeridinde bulunan lüks sitelerin çoğunda taşınma işlemleri için belirli kurallar bulunmaktadır. Genellikle belirli saat aralıklarında taşıma yapılması, asansörlerin korunması için özel önlemler alınması ve site yönetiminden önceden izin alınması gerekmektedir. Horex Nakliyat olarak bu süreçleri sizin adınıza yönetiyor, tüm gerekli izinleri alıyor ve site kurallarına uygun şekilde taşıma hizmeti veriyoruz.'
        },
        {
          question: 'Caddebostan\'dan taşınırken depolama hizmetinizden de yararlanabilir miyiz?',
          answer: 'Evet, Caddebostan\'dan taşınan müşterilerimiz için kısa ve uzun süreli depolama hizmetlerimiz bulunmaktadır. Özellikle geçici süreyle başka bir şehre giden veya evini yenileyen müşterilerimiz bu hizmetimizden sıkça yararlanmaktadır. Depolama tesislerimiz 7/24 güvenlik kameraları ile izlenmekte, nem ve sıcaklık kontrolü yapılmakta ve her türlü zararlıya karşı düzenli ilaçlama uygulanmaktadır. Ayrıca tüm depolanan eşyalar sigorta kapsamındadır.'
        }
      ]
    }
  },
  'florya': {
    description: 'Florya\'da profesyonel ve güvenilir nakliyat hizmetleri. İstanbul\'un bu prestijli sahil semtinde evden eve, ofis taşıma ve eşya depolama çözümleriyle hizmetinizdeyiz.',
    imagePath: '/images/districts/florya.jpg',
    content: {
      introduction: 'Florya, İstanbul\'un Bakırköy ilçesine bağlı, Marmara Denizi kıyısında yer alan lüks konutları ve villaları ile tanınan seçkin bir semttir. Atatürk\'ün Florya Deniz Köşkü gibi tarihi yapıları, sahil şeridi ve yeşil alanlarıyla İstanbul\'un en güzel semtlerinden biri olan Florya, sakin yapısı ve prestijli konut projeleriyle bilinir. Horex Nakliyat olarak Florya\'nın özel karakterine uygun, kaliteli ve özenli nakliyat hizmetleri sunmaktayız.',
      services: 'Florya\'da sunduğumuz nakliyat hizmetleri arasında villa taşıma, evden eve nakliyat, antika ve değerli eşya taşıma, ofis taşıma ve eşya depolama yer almaktadır. Lüks villaların ve müstakil evlerin yoğun olduğu bu semtte, özel paketleme teknikleri ve profesyonel ekibimizle değerli eşyalarınızı güvenle taşımaktayız.',
      advantages: 'Florya\'nın villa yapısını ve geniş bahçeli evlerinin özelliklerini iyi bilen ekibimiz, taşınma sürecinizi sorunsuz şekilde yönetebilmektedir. Büyük ve değerli eşyaların taşınmasında uzmanlaşmış personelimiz, özel paketleme malzemeleri ve modern ekipmanlarla eşyalarınızı maksimum güvenlikle taşımaktadır. Ayrıca, Florya\'nın sahil semti olmasından dolayı nem faktörünü göz önünde bulundurarak özel nem önleyici paketleme malzemeleri kullanmaktayız.',
      process: 'Florya\'daki nakliyat sürecimiz, detaylı bir keşif ile başlar. Villa veya evinizin özellikleri, eşya miktarı ve özel taşıma gerektiren değerli eşyalarınız belirlenir. Taşıma günü için gerekli izinler alınır ve taşıma planı oluşturulur. Profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve özenle yerleştirir.',
      faq: [
        {
          question: 'Florya\'daki villamızı taşırken bahçe mobilyaları ve dış mekan eşyaları için özel bir hizmet sunuyor musunuz?',
          answer: 'Evet, Florya\'daki villalarda sıkça karşılaştığımız bahçe mobilyaları, şezlong, barbekü ekipmanları ve dış mekan aksesuarları için özel paketleme ve taşıma hizmetlerimiz bulunmaktadır. Bu eşyalar dış etkilere dayanıklı malzemelerle paketlenmekte ve özel araçlarla taşınmaktadır.'
        },
        {
          question: 'Florya\'daki evimizde bulunan piyano ve antika eşyalar için nasıl bir koruma sağlıyorsunuz?',
          answer: 'Piyano ve antika eşyalar için özel koruyucu malzemeler ve paketleme teknikleri kullanmaktayız. Piyano taşıma konusunda eğitimli ekibimiz, özel piyano taşıma ekipmanları kullanarak piyanonuzu güvenle taşımaktadır. Antika eşyalarınız için ise asitsiz kağıt, özel köpük destekler ve ahşap taşıma kasaları gibi profesyonel çözümlerimiz bulunmaktadır.'
        },
        {
          question: 'Florya\'dan yurt dışına taşınma hizmetiniz var mı?',
          answer: 'Evet, Florya\'dan dünyanın birçok ülkesine uluslararası nakliyat hizmeti vermekteyiz. Yurt dışı taşımacılığında gümrük işlemleri, özel paketleme, sigortalama ve lojistik planlama gibi tüm süreçleri profesyonel ekibimizle yönetmekteyiz. Kara, hava ve deniz yolu ile güvenli ve hızlı taşımacılık çözümleri sunuyoruz.'
        }
      ]
    }
  },
  'yesilkoy': {
    description: 'Yeşilköy\'de güvenilir ve profesyonel nakliyat hizmetleri. İstanbul\'un bu tarihi ve nezih semtinde evden eve, ofis taşıma ve eşya depolama çözümleriyle yanınızdayız.',
    imagePath: '/images/districts/yesilkoy.jpg',
    content: {
      introduction: 'Yeşilköy, İstanbul\'un Bakırköy ilçesine bağlı, Marmara Denizi kıyısında yer alan, tarihi köşkleri, bahçeli evleri ve nezih yapısıyla tanınan seçkin bir semttir. Eski adı Ayastefanos olan Yeşilköy, İstanbul\'un en eski yerleşim yerlerinden biri olup, havalimanı, marina ve sahil şeridiyle önemli bir konumdadır. Horex Nakliyat olarak Yeşilköy\'ün tarihi dokusuna ve özel yapısına uygun nakliyat hizmetleri sunmaktayız.',
      services: 'Yeşilköy\'de sunduğumuz nakliyat hizmetleri arasında köşk ve villa taşıma, evden eve nakliyat, ofis taşıma, antika eşya taşıma ve eşya depolama yer almaktadır. Tarihi yapıların ve müstakil evlerin yoğun olduğu bu semtte, hassas eşyaların ve antika mobilyaların taşınması konusunda uzmanlaşmış ekibimizle hizmet vermekteyiz.',
      advantages: 'Yeşilköy\'ün tarihi dokusunu ve konut yapısını iyi bilen ekibimiz, taşınma sürecinizi binanıza ve eşyalarınıza zarar vermeden yönetebilmektedir. Köşk ve villaların dar merdivenleri, antika kapıları ve özel mimari yapıları için geliştirdiğimiz taşıma teknikleri, eşyalarınızın güvenliğini sağlar. Ayrıca, havalimanına yakınlığı nedeniyle uluslararası taşımacılık konusunda da avantajlı çözümler sunmaktayız.',
      process: 'Yeşilköy\'deki nakliyat sürecimiz, detaylı bir keşif ile başlar. Evin mimari özellikleri, taşınacak eşyalar ve özel taşıma gerektiren parçalar belirlenir. Taşıma günü için gerekli izinler alınır ve taşıma planı oluşturulur. Taşıma günü, profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, arazi koşullarına uygun araçlarla yeni adresinize taşır ve özenle yerleştirir.',
      faq: [
        {
          question: 'Yeşilköy\'deki tarihi köşkümüzü taşırken antika eşyalarımız için ne gibi önlemler alıyorsunuz?',
          answer: 'Yeşilköy\'deki tarihi köşklerde bulunan antika eşyalar için özel koruyucu malzemeler, asitsiz kağıtlar ve özel taşıma kasaları kullanmaktayız. Antika mobilyalar, tablolar ve değerli objeler için özel eğitimli personelimiz görevlendirilmekte ve her bir parça için ayrı paketleme planı uygulanmaktadır.'
        },
        {
          question: 'Yeşilköy Havalimanı\'na yakın olmamız sebebiyle uluslararası taşımacılıkta avantaj sağlıyor musunuz?',
          answer: 'Evet, Yeşilköy\'ün İstanbul Havalimanı\'na yakınlığı nedeniyle uluslararası taşımacılık konusunda hızlı ve ekonomik çözümler sunabiliyoruz. Özellikle hava kargo ile yapılan taşımalarda lojistik avantaj sağlıyor, gümrük işlemlerinin daha hızlı tamamlanması için uzman ekibimizle destek oluyoruz.'
        },
        {
          question: 'Yeşilköy\'deki dar sokaklar ve park sorunları taşıma sürecini etkiliyor mu?',
          answer: 'Yeşilköy\'ün bazı bölgelerindeki dar sokaklar ve park kısıtlamaları için önceden planlama yapıyor, gerekli durumlarda belediyeden özel izinler alıyoruz. Dar sokaklara uygun küçük araçlar kullanıyor, gerektiğinde aktarmalı taşıma sistemiyle eşyalarınızı güvenle yeni adresinize ulaştırıyoruz.'
        }
      ]
    }
  },
  'bahcesehir': {
    description: 'Bahçeşehir\'de profesyonel ve güvenilir nakliyat hizmetleri. İstanbul\'un bu modern yerleşim bölgesinde evden eve, ofis taşıma ve eşya depolama çözümleriyle hizmetinizdeyiz.',
    imagePath: '/images/districts/bahcesehir.jpg',
    content: {
      introduction: 'Bahçeşehir, İstanbul\'un Avrupa yakasında, Başakşehir ilçesine bağlı, modern konut projeleri, gölleri ve yeşil alanlarıyla tanınan planlı bir yerleşim bölgesidir. Şehrin gürültüsünden uzak, doğayla iç içe bir yaşam sunan Bahçeşehir, site yapılaşması, geniş caddeleri ve sosyal olanaklarıyla ailelerin tercih ettiği bir bölgedir. Horex Nakliyat olarak Bahçeşehir\'in planlı yapısına uygun nakliyat hizmetleri sunmaktayız.',
      services: 'Bahçeşehir\'de sunduğumuz nakliyat hizmetleri arasında evden eve nakliyat, ofis taşıma, site içi taşıma, şehirlerarası nakliyat ve eşya depolama yer almaktadır. Site yaşamının yoğun olduğu bu bölgede, site yönetimlerinin kurallarına uygun taşıma planları ve profesyonel ekibimizle hizmet vermekteyiz.',
      advantages: 'Bahçeşehir\'in site yapısını ve bölge dinamiklerini iyi bilen ekibimiz, taşınma sürecinizi en verimli şekilde yönetebilmektedir. Site yönetimleriyle olan iyi ilişkilerimiz sayesinde asansör kullanımı ve taşıma izinleri konusunda avantaj sağlarız. Geniş caddeleri ve planlı yapısı, taşıma araçlarımızın kolay manevra yapabilmesine olanak tanır. Ayrıca, bölgedeki depolama tesislerimizde eşyalarınızı güvenle muhafaza edebiliriz.',
      process: 'Bahçeşehir\'deki nakliyat sürecimiz, ücretsiz keşif ile başlar. Site içi kurallar, asansör durumu ve taşınacak eşyalar değerlendirilir. Site yönetiminden gerekli izinler alınır ve taşıma planı oluşturulur. Taşıma günü, profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve özenle yerleştirir.',
      faq: [
        {
          question: 'Bahçeşehir\'deki sitelerde taşınma için özel izinler gerekiyor mu?',
          answer: 'Evet, Bahçeşehir\'deki birçok sitede taşınma işlemleri için yönetimden izin alınması, belirli saatlerde çalışılması ve asansör kullanımı için rezervasyon yapılması gerekmektedir. Horex Nakliyat olarak bu izinleri sizin adınıza alıyor ve tüm site kurallarına uygun şekilde taşıma yapıyoruz.'
        },
        {
          question: 'Bahçeşehir\'den şehir dışına taşınmak istiyoruz, bu hizmeti sağlıyor musunuz?',
          answer: 'Evet, Bahçeşehir\'den Türkiye\'nin tüm illerine şehirlerarası nakliyat hizmeti vermekteyiz. Şehirlerarası taşımalarda eşyalarınız daha özenli paketlenir, kapalı kasa ve güvenlik donanımlı araçlarımızla taşınır. Ayrıca GPS takip sistemi ile eşyalarınızın konumunu anlık olarak izleyebilirsiniz.'
        },
        {
          question: 'Bahçeşehir\'de eşya depolama hizmetiniz var mı?',
          answer: 'Evet, Bahçeşehir ve çevresinde kısa ve uzun süreli eşya depolama hizmetimiz bulunmaktadır. Özellikle geçici süreyle başka bir şehre giden veya evini yenileyen müşterilerimiz bu hizmetimizden sıkça yararlanmaktadır. Depolama tesislerimiz 7/24 güvenlik kameraları ile izlenmekte, nem ve sıcaklık kontrolü yapılmakta ve düzenli olarak ilaçlanmaktadır. Ayrıca tüm depolanan eşyalar sigorta kapsamındadır.'
        }
      ]
    }
  },
  'kemerburgaz': {
    description: 'Kemerburgaz\'da profesyonel ve güvenilir nakliyat hizmetleri. İstanbul\'un bu doğa içindeki semtinde villa, ev ve ofis taşıma çözümleriyle hizmetinizdeyiz.',
    imagePath: '/images/districts/kemerburgaz.jpg',
    content: {
      introduction: 'Kemerburgaz, İstanbul\'un Eyüpsultan ilçesine bağlı, Belgrad Ormanları içinde yer alan doğal güzellikleriyle ünlü bir semttir. Son yıllarda lüks villa projeleri ve konut siteleriyle gelişen Kemerburgaz, şehrin karmaşasından uzak, doğayla iç içe bir yaşam sunmaktadır. Temiz havası ve yeşil dokusuyla prestijli bir yerleşim yeri haline gelen Kemerburgaz\'da, Horex Nakliyat olarak profesyonel nakliyat hizmetleri sunmaktayız.',
      services: 'Kemerburgaz\'da sunduğumuz nakliyat hizmetleri arasında villa taşıma, evden eve nakliyat, ofis taşıma, şehirlerarası nakliyat ve eşya depolama yer almaktadır. Orman içindeki villa ve sitelerin yoğun olduğu bu bölgede, arazi şartlarına uygun araçlar ve profesyonel ekibimizle hizmet vermekteyiz.',
      advantages: 'Kemerburgaz\'ın coğrafi yapısını ve ulaşım koşullarını iyi bilen ekibimiz, taşınma sürecinizi zorlu arazi şartlarında bile sorunsuz yönetebilmektedir. Özellikle engebeli arazilerde ve orman içi yollarda kullanıma uygun araç filomuz ve deneyimli personelimizle, eşyalarınızı güvenle taşımaktayız. Ayrıca, lüks villa projelerindeki değerli eşyaların taşınması konusunda özel uzmanlığımız bulunmaktadır.',
      process: 'Kemerburgaz\'daki nakliyat sürecimiz, detaylı bir keşif ile başlar. Evin konumu, ulaşım koşulları ve taşınacak eşyalar değerlendirilir. Özellikle orman içindeki ve engebeli arazilerdeki villalar için özel rota planlaması yapılır. Taşıma günü, profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, arazi koşullarına uygun araçlarla yeni adresinize taşır ve özenle yerleştirir.',
      faq: [
        {
          question: 'Kemerburgaz\'daki orman içindeki villamıza büyük eşyaları nasıl taşıyorsunuz?',
          answer: 'Kemerburgaz\'ın engebeli arazi yapısı ve dar orman yolları için özel 4x4 araçlar ve arazi şartlarına uygun taşıma ekipmanları kullanmaktayız. Büyük eşyalar için modüler taşıma teknikleri uyguluyor, gerektiğinde parçalara ayırarak taşıma yapabiliyoruz.'
        },
        {
          question: 'Kemerburgaz\'daki villamızda bulunan şömine, jakuzi gibi özel parçaları taşıyabilir misiniz?',
          answer: 'Evet, Kemerburgaz\'daki villalarda sıkça karşılaştığımız şömine, jakuzi, sauna ve benzeri özel parçaların taşınması için uzman ekibimiz ve özel ekipmanlarımız bulunmaktadır. Bu tür büyük ve hassas parçalar için özel taşıma planları oluşturuyor ve güvenle montaj-demontaj işlemlerini gerçekleştiriyoruz.'
        },
        {
          question: 'Kemerburgaz\'daki evimizi kış aylarında taşımak istiyoruz, hava koşulları sorun yaratır mı?',
          answer: 'Kemerburgaz\'ın özellikle kış aylarında karla kaplanan orman yolları ve kaygan arazi koşulları için özel önlemler almaktayız. Kış taşımalarında zincir donanımlı araçlar kullanıyor, hava tahminlerini yakından takip ederek en uygun günü belirliyoruz. Eşyalarınızın nem ve yağıştan etkilenmemesi için ekstra koruma önlemleri alıyoruz.'
        }
      ]
    }
  },
  'gokturk': {
    description: 'Göktürk\'te profesyonel ve güvenilir nakliyat hizmetleri. İstanbul\'un bu prestijli villa semtinde lüks eşyalarınız için özel çözümlerimizle hizmetinizdeyiz.',
    imagePath: '/images/districts/gokturk.jpg',
    content: {
      introduction: 'Göktürk, İstanbul\'un Eyüpsultan ilçesine bağlı, lüks villa projeleri, kapalı siteler ve modern yaşam alanlarıyla tanınan prestijli bir semttir. Şehrin karmaşasından uzak, doğayla iç içe bir yaşam sunan Göktürk, son yıllarda üst gelir grubunun tercih ettiği bir yerleşim yeri haline gelmiştir. Horex Nakliyat olarak Göktürk\'ün özel yapısına uygun, kaliteli nakliyat hizmetleri sunmaktayız.',
      services: 'Göktürk\'te sunduğumuz nakliyat hizmetleri arasında villa taşıma, evden eve nakliyat, ofis taşıma, değerli eşya taşıma ve eşya depolama yer almaktadır. Lüks villa ve kapalı sitelerin yoğun olduğu bu bölgede, değerli eşyaların taşınması konusunda uzmanlaşmış ekibimizle hizmet vermekteyiz.',
      advantages: 'Göktürk\'ün site yapısını ve villa mimarisini iyi bilen ekibimiz, taşınma sürecinizi en verimli şekilde yönetebilmektedir. Site yönetimleriyle olan iyi ilişkilerimiz sayesinde taşıma izinleri konusunda avantaj sağlarız. Lüks ve antika eşyaların taşınmasında kullandığımız özel paketleme malzemeleri ve teknikleri, eşyalarınızın güvenliğini maksimum seviyede sağlamaktadır. Ayrıca, Göktürk bölgesinde depolama tesislerimiz bulunmakta olup, eşyalarınız sigortalı ve güvenli şekilde muhafaza edilmektedir.',
      process: 'Göktürk\'teki nakliyat sürecimiz, detaylı bir keşif ile başlar. Villa veya evinizin özellikleri, değerli eşyalarınız ve özel taşıma gerektiren parçalar belirlenir. Site yönetiminden gerekli izinler alınır ve taşıma planı oluşturulur. Taşıma günü, profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve özenle yerleştirir.',
      faq: [
        {
          question: 'Göktürk\'teki kapalı sitemizdeki villamızı taşırken site kuralları sorun yaratır mı?',
          answer: 'Göktürk\'teki kapalı sitelerin çoğunda taşınma işlemleri için belirli kurallar bulunmaktadır. Horex Nakliyat olarak Göktürk\'teki tüm büyük sitelerin kurallarını bilmekte ve bu kurallara uygun şekilde planlama yapmaktayız. Site yönetiminden gerekli izinleri sizin adınıza alıyor ve belirlenen saatlerde, belirlenen güzergahlardan taşıma yapıyoruz.'
        },
        {
          question: 'Göktürk\'teki villada bulunan değerli sanat eserlerimiz ve antikalarımız için özel hizmetiniz var mı?',
          answer: 'Evet, Göktürk\'te sıkça karşılaştığımız değerli sanat eserleri, tablolar, heykeller ve antikalar için özel paketleme malzemeleri ve taşıma teknikleri kullanmaktayız. Bu tür değerli eşyalar için müzelerle çalışan profesyonel ekibimiz görevlendirilmekte ve her bir parça için özel koruma önlemleri alınmaktadır. Ayrıca yüksek değerli eşyalar için ekstra sigorta seçenekleri sunmaktayız.'
        },
        {
          question: 'Göktürk\'ten yurt dışına taşınacağız, uluslararası nakliyat hizmetiniz var mı?',
          answer: 'Evet, Göktürk\'ten dünyanın birçok ülkesine uluslararası nakliyat hizmeti vermekteyiz. Uluslararası standartlarda paketleme, gümrük işlemlerinde destek, doküman hazırlama ve lojistik planlama gibi tüm süreçleri profesyonel ekibimizle yönetmekteyiz. Kara, hava ve deniz yolu ile güvenli ve hızlı taşımacılık çözümleri sunuyoruz.'
        }
      ]
    }
  },
  'zekeriyakoy': {
    description: 'Zekeriyaköy\'de profesyonel ve güvenilir nakliyat hizmetleri. İstanbul\'un bu orman içindeki lüks villa semtinde özel eşyalarınız için uzman kadromuzla hizmetinizdeyiz.',
    imagePath: '/images/districts/zekeriyakoy.jpg',
    content: {
      introduction: 'Zekeriyaköy, İstanbul\'un Sarıyer ilçesine bağlı, Belgrad Ormanları\'nın eteklerinde yer alan lüks villaları ve modern konut projeleriyle tanınan prestijli bir semttir. Şehir merkezine yakın olmasına rağmen doğayla iç içe bir yaşam sunan Zekeriyaköy, temiz havası, yeşil dokusuyla prestijli bir yerleşim yeri haline gelmiştir. Horex Nakliyat olarak Zekeriyaköy\'ün özel yapısına uygun, kaliteli nakliyat hizmetleri sunmaktayız.',
      services: 'Zekeriyaköy\'de sunduğumuz nakliyat hizmetleri arasında villa taşıma, evden eve nakliyat, ofis taşıma, değerli eşya taşıma, sanat eseri taşıma ve eşya depolama yer almaktadır. Lüks villa ve kapalı sitelerin yoğun olduğu bu bölgede, değerli eşyaların ve özel koleksiyonların taşınması konusunda uzmanlaşmış ekibimizle hizmet vermekteyiz.',
      advantages: 'Zekeriyaköy\'ün coğrafi yapısını ve villa mimarisini iyi bilen ekibimiz, taşınma sürecinizi en sorunsuz şekilde yönetebilmektedir. Özellikle engebeli arazilerde ve orman içi yollarda kullanıma uygun araç filomuz ve deneyimli personelimizle, eşyalarınızı güvenle taşımaktayız. Lüks villalarda bulunan değerli ve antika eşyaların taşınmasında kullandığımız özel paketleme malzemeleri ve teknikleri, eşyalarınızın güvenliğini maksimum seviyede sağlamaktadır.',
      process: 'Zekeriyaköy\'deki nakliyat sürecimiz, detaylı bir keşif ile başlar. Villanızın konumu, ulaşım koşulları, değerli eşyalarınız ve özel taşıma gerektiren parçalar belirlenir. Site yönetiminden gerekli izinler alınır ve taşıma planı oluşturulur. Taşıma günü, profesyonel ekibimiz tüm eşyalarınızı özel malzemelerle paketleyerek, güvenle yeni adresinize taşır ve özenle yerleştirir.',
      faq: [
        {
          question: 'Zekeriyaköy\'deki villamızda bulunan büyük ve ağır mobilyaları nasıl taşıyorsunuz?',
          answer: 'Zekeriyaköy\'deki villalarda sıkça karşılaştığımız büyük ve ağır mobilyalar için özel taşıma ekipmanları ve teknikleri kullanmaktayız. Gerektiğinde modüler taşıma yöntemleri uygulayarak, engebeli arazi ve dar geçişlerde bile büyük eşyaları güvenle taşıyabiliyoruz. Ayrıca, bahçe ve dış mekan mobilyaları için de hava koşullarına dayanıklı paketleme malzemeleri kullanmaktayız.'
        },
        {
          question: 'Zekeriyaköy\'deki villamızı kış aylarında taşımak istiyoruz, hava koşulları sorun yaratır mı?',
          answer: 'Zekeriyaköy\'ün özellikle kış aylarında yağışlı ve kaygan yol koşulları için özel önlemler almaktayız. Kış taşımalarında zincir donanımlı araçlar kullanıyor, hava tahminlerini yakından takip ederek en uygun günü belirliyoruz. Eşyalarınızın nem ve yağıştan etkilenmemesi için ekstra koruma önlemleri alıyoruz.'
        },
        {
          question: 'Zekeriyaköy\'deki sanat koleksiyonumuz ve antika mobilyalarımız için özel bir hizmetiniz var mı?',
          answer: 'Evet, Zekeriyaköy\'deki lüks villalarda sıkça karşılaştığımız sanat eserleri, tablolar, heykeller ve antikalar için uzmanlaşmış ekibimiz ve özel paketleme çözümlerimiz bulunmaktadır. Sanat eserleri için müze standartlarında paketleme malzemeleri, asitsiz kağıtlar, özel taşıma kasaları ve şok emici sistemler kullanmaktayız. Ayrıca bu tür değerli eşyalar için ekstra sigorta teminatı da sağlıyoruz.'
        }
      ]
    }
  },
  // ... Diğer semtler sonraki adımlarda eklenecek
};

// Export district names and slugs for static path generation
export const getDistrictSlugs = () => {
  return Object.keys(districtData).map(slug => ({
    slug,
    districtName: slug.charAt(0).toUpperCase() + slug.slice(1)
  }));
}; 