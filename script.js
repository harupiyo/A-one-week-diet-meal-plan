// Recipe Data
const recipeData = {
  'greek-yogurt': {
    title: 'ギリシャヨーグルトとベリー',
    image: 'images/greek_yogurt_berries.png',
    calories: '250kcal',
    time: '5分',
    protein: '15g',
    ingredients: [
      'ギリシャヨーグルト 200g',
      'ミックスベリー（冷凍可）100g',
      'グラノーラ 30g',
      'はちみつ 小さじ1',
      'ミントの葉 適量'
    ],
    steps: [
      'ボウルにギリシャヨーグルトを入れます。',
      'ミックスベリーを上にのせます。',
      'グラノーラを散らします。',
      'はちみつをかけて、ミントの葉を飾れば完成です。'
    ]
  },
  'grilled-chicken': {
    title: '鶏胸肉のグリルサラダ',
    image: 'images/grilled_chicken_salad.png',
    calories: '380kcal',
    time: '20分',
    protein: '35g',
    ingredients: [
      '鶏胸肉 150g',
      'ミックスリーフ 100g',
      'ミニトマト 8個',
      'きゅうり 1/2本',
      'オリーブオイル 大さじ1',
      'レモン汁 大さじ1',
      '塩・こしょう 適量'
    ],
    steps: [
      '鶏胸肉に塩・こしょうをして、グリルで両面を焼きます。',
      '野菜を食べやすい大きさに切ります。',
      'ボウルに野菜を入れ、オリーブオイルとレモン汁で和えます。',
      '皿に盛り付け、スライスした鶏胸肉をのせて完成です。'
    ]
  },
  'tofu-steak': {
    title: '豆腐ステーキと野菜炒め',
    image: 'images/tofu_steak_vegetables.png',
    calories: '420kcal',
    time: '25分',
    protein: '20g',
    ingredients: [
      '木綿豆腐 1丁（300g）',
      'パプリカ（赤・黄）各1/2個',
      'ブロッコリー 100g',
      'にんにく 1片',
      'しょうゆ 大さじ1',
      'ごま油 大さじ1',
      '片栗粉 適量'
    ],
    steps: [
      '豆腐を水切りし、厚さ2cmにカットして片栗粉をまぶします。',
      'フライパンにごま油を熱し、豆腐を両面こんがり焼きます。',
      '別のフライパンで野菜とにんにくを炒めます。',
      'しょうゆで味付けし、豆腐と一緒に盛り付けて完成です。'
    ]
  },
  'oatmeal': {
    title: 'オートミールとバナナ',
    image: 'images/oatmeal_banana.png',
    calories: '280kcal',
    time: '10分',
    protein: '10g',
    ingredients: [
      'オートミール 50g',
      '無調整豆乳 200ml',
      'バナナ 1本',
      'シナモン 少々',
      'はちみつ 小さじ1',
      'くるみ 適量'
    ],
    steps: [
      '鍋にオートミールと豆乳を入れて中火にかけます。',
      '3〜5分煮て、とろみがつくまで混ぜます。',
      'ボウルに移し、スライスしたバナナをのせます。',
      'シナモン、はちみつ、砕いたくるみをトッピングして完成です。'
    ]
  },
  'salmon-poke': {
    title: 'サーモンのポキボウル',
    image: 'images/salmon_poke_bowl.png',
    calories: '450kcal',
    time: '15分',
    protein: '28g',
    ingredients: [
      'サーモン刺身用 150g',
      '玄米ご飯 100g',
      'アボカド 1/2個',
      '枝豆 50g',
      'しょうゆ 大さじ1',
      'ごま油 小さじ1',
      '白ごま 適量'
    ],
    steps: [
      'サーモンを1.5cm角に切ります。',
      'しょうゆとごま油を混ぜ、サーモンを漬けます。',
      'ボウルに玄米ご飯を盛り、サーモン、アボカド、枝豆をのせます。',
      '白ごまを振りかけて完成です。'
    ]
  },
  'smoothie-bowl': {
    title: 'スムージーボウル',
    image: 'images/smoothie_bowl.png',
    calories: '300kcal',
    time: '10分',
    protein: '12g',
    ingredients: [
      '冷凍ミックスベリー 150g',
      'バナナ 1本',
      'ギリシャヨーグルト 100g',
      'アーモンドミルク 50ml',
      'グラノーラ 30g',
      'チアシード 小さじ1'
    ],
    steps: [
      'ミキサーに冷凍ベリー、バナナ、ヨーグルト、アーモンドミルクを入れます。',
      'なめらかになるまで撹拌します。',
      'ボウルに注ぎ、グラノーラとチアシードをトッピングします。',
      'お好みでフルーツを飾って完成です。'
    ]
  }
};

// Day Tab Switching
document.addEventListener('DOMContentLoaded', function() {
  const dayTabs = document.querySelectorAll('.day-tab');
  const dayContents = document.querySelectorAll('.day-content');

  dayTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      const targetDay = this.getAttribute('data-day');
      
      // Remove active class from all tabs and contents
      dayTabs.forEach(t => t.classList.remove('active'));
      dayContents.forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.getElementById(targetDay).classList.add('active');
    });
  });

  // Recipe Modal
  const mealCards = document.querySelectorAll('.meal-card, .recipe-card');
  const modal = document.getElementById('recipeModal');
  
  mealCards.forEach(card => {
    card.addEventListener('click', function() {
      const recipeId = this.getAttribute('data-recipe');
      const recipe = recipeData[recipeId];
      
      if (recipe) {
        openModal(recipe);
      }
    });
  });

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe feature cards, meal cards, and recipe cards
  document.querySelectorAll('.feature-card, .meal-card, .recipe-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Modal Functions
function openModal(recipe) {
  const modal = document.getElementById('recipeModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalCalories = document.getElementById('modalCalories');
  const modalTime = document.getElementById('modalTime');
  const modalProtein = document.getElementById('modalProtein');
  const modalIngredients = document.getElementById('modalIngredients');
  const modalSteps = document.getElementById('modalSteps');

  modalImage.src = recipe.image;
  modalImage.alt = recipe.title;
  modalTitle.textContent = recipe.title;
  modalCalories.textContent = recipe.calories;
  modalTime.textContent = recipe.time;
  modalProtein.textContent = recipe.protein;

  // Clear and populate ingredients
  modalIngredients.innerHTML = '';
  recipe.ingredients.forEach(ingredient => {
    const li = document.createElement('li');
    li.textContent = ingredient;
    modalIngredients.appendChild(li);
  });

  // Clear and populate steps
  modalSteps.innerHTML = '';
  recipe.steps.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    modalSteps.appendChild(li);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('recipeModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
