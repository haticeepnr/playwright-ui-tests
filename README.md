# Playwright UI Testleri

Playwright ve TypeScript ile yazdığım UI test otomasyonu pratiği. (Devam ediyor)

## Test edilen senaryolar
- **saucedemo.com:** Login butonunun görünürlüğü, doğru ve yanlış şifreyle giriş, gecikmeli kullanıcı (performance_glitch_user) ile giriş, sepete ürün ekleme, filter ile ürün seçme
- **the-internet.herokuapp.com:** Dinamik olarak yüklenen içeriği bekleme

## Kullanılan teknikler
- getByRole, getByPlaceholder ve getByTestId locator'ları
- filter ile liste içinden doğru ürünü seçme
- Web-first assertion'lar ve Playwright'ın auto-wait özelliği
- Assertion'da özel timeout kullanımı

## Dosyalar
- `saucedemo.spec.ts`, `locators.spec.ts` — saucedemo.com giriş ve sepet testleri
- `bekleme.spec.ts` — bekleme ve dinamik içerik testleri
- `playwright.config.ts` — Playwright ayarları
