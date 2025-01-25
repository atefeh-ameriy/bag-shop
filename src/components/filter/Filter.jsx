import React, { useEffect } from "react";
import { useGlobalContext } from "../../context";
import "./Filter.css";

function Filter() {
  const { Filter, activeCategory, setActiveCategory ,categoryData} = useGlobalContext();

  useEffect(() => {
    if (categoryData.length > 0 && !activeCategory) {
      setActiveCategory(categoryData[0]); // Set first category as active on mount if none is active
    }
  }, [categoryData, activeCategory, setActiveCategory]);

  const handleClick = (category) => {
    console.log(`Clicked category: ${category}`); // Log the clicked category
    Filter(category); // Call the filter function
    setActiveCategory(category); // Update the active category in global state
  };

  return (
    <div className="filter">
      {categoryData.map((category, index) => {
        return (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={` filter-btn ${activeCategory === category ? "filterActive" : ""}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;

/*ما در حال صحبت درباره یک قطعه کد هستیم که در آن از هوک useEffect در یک کامپوننت React استفاده می‌شود. هدف این کد این است که یک دسته (category) فعال را تنظیم کند وقتی که کامپوننت برای اولین بار بارگذاری می‌شود.

### قسمت‌های اصلی کد
1. **هوک useEffect**:
   - این هوک به ما اجازه می‌دهد کارهایی را بعد از رندر شدن کامپوننت انجام دهیم.
   - ما به useEffect می‌گوییم که وقتی یکی از متغیرهای categoryData، activeCategory یا setActiveCategory تغییر کند، این کد را اجرا کند.

2. **شرط‌ها**:
   - ما دو شرط داریم:
     - **آیا دسته‌ها وجود دارند؟** (categoryData.length > 0): این بررسی می‌کند که آیا در آرایه categoryData چیزی وجود دارد یا نه. اگر خالی باشد، یعنی هیچ دسته‌ای برای نمایش نداریم.
     - **آیا دسته‌ای فعال انتخاب نشده است؟** (!activeCategory): این بررسی می‌کند که آیا هنوز هیچ دسته‌ای انتخاب نکرده‌ایم. اگر activeCategory خالی باشد، یعنی هنوز دسته‌ای انتخاب نکرده‌ایم.

3. **چرا این شرط‌ها مهم هستند؟**:
   - اگر categoryData خالی باشد، نمی‌خواهیم یک دسته فعال تنظیم کنیم، زیرا هیچ دسته‌ای برای انتخاب وجود ندارد.
   - اگر یک دسته فعال قبلاً انتخاب شده باشد، نمی‌خواهیم آن را با اولین دسته از categoryData عوض کنیم.

4. **تنظیم دسته فعال**:
   - اگر هر دو شرط درست باشند (یعنی دسته‌هایی برای نمایش وجود داشته باشد و هیچ دسته فعالی انتخاب نشده باشد)، ما اولین دسته در categoryData را به عنوان دسته فعال تنظیم می‌کنیم. این کار با خط setActiveCategory(categoryData[0]) انجام می‌شود.

### مثال ساده
فرض کنید شما یک آرایه به نام categoryData دارید که شامل سه دسته است:

const categoryData = ["همه", "میوه‌ها", "سبزیجات"];


- وقتی که کامپوننت شما بارگذاری می‌شود:
  - آیا دسته‌هایی برای نمایش وجود دارد؟ بله، پس شرط اول درست است.
  - آیا هیچ دسته‌ای فعال انتخاب نشده است؟ بله، پس شرط دوم هم درست است.

بنابراین، کد ما اجرا می‌شود و "همه" به عنوان دسته فعال تنظیم می‌شود.

### نتیجه‌گیری
این کد اطمینان می‌دهد که وقتی کامپوننت شما بارگذاری می‌شود، یک دسته پیش‌فرض (در اینجا "همه") به طور خودکار انتخاب شود، اما فقط زمانی که دسته‌هایی برای نمایش وجود داشته باشد و هیچ دسته‌ای قبلاً انتخاب نشده باشد. این کار باعث می‌شود کاربر تجربه بهتری داشته باشد و از خطاهای احتمالی جلوگیری کند.

اگر هنوز سوالی دارید یا نیاز به توضیحات بیشتری دارید، خوشحال می‌شوم کمک کنم!*/