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
      'ミックスベリー(冷凍可) 100g',
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
      '木綿豆腐 1丁(300g)',
      'パプリカ(赤・黄) 各1/2個',
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
  },
  'chicken-tomato': {
    title: '鶏むね肉のトマト煮込み',
    image: 'images/grilled_chicken_salad.png',
    calories: '400kcal',
    time: '30分',
    protein: '32g',
    ingredients: [
      '鶏むね肉 150g',
      'トマト缶 200g',
      '玉ねぎ 1/2個',
      'にんにく 1片',
      'オリーブオイル 大さじ1',
      '塩・こしょう 適量',
      'バジル 適量'
    ],
    steps: [
      '鶏むね肉を一口大に切ります。',
      'フライパンでにんにくと玉ねぎを炒めます。',
      '鶏肉を加えて焼き色をつけます。',
      'トマト缶を加えて15分煮込み、塩・こしょうで味を調えて完成です。'
    ]
  },
  'spring-noodle': {
    title: '野菜たっぷり春雨スープ',
    image: 'images/salmon_poke_bowl.png',
    calories: '320kcal',
    time: '20分',
    protein: '12g',
    ingredients: [
      '春雨 50g',
      '白菜 100g',
      'にんじん 1/2本',
      'しいたけ 3個',
      '鶏がらスープの素 大さじ1',
      'しょうゆ 小さじ1',
      'ごま油 少々'
    ],
    steps: [
      '野菜を食べやすい大きさに切ります。',
      '鍋に水と鶏がらスープの素を入れて沸かします。',
      '野菜と春雨を加えて煮ます。',
      'しょうゆとごま油で味を調えて完成です。'
    ]
  },
  'white-fish': {
    title: '白身魚のホイル焼き',
    image: 'images/tofu_steak_vegetables.png',
    calories: '380kcal',
    time: '25分',
    protein: '28g',
    ingredients: [
      '白身魚(鱈など) 1切れ',
      'しめじ 50g',
      'ピーマン 1個',
      'レモン 1/4個',
      'バター 10g',
      '塩・こしょう 適量',
      '酒 大さじ1'
    ],
    steps: [
      'アルミホイルに魚と野菜をのせます。',
      '塩・こしょう、酒、バターをのせます。',
      'ホイルで包んでオーブントースターで15分焼きます。',
      'レモンを添えて完成です。'
    ]
  },
  'avocado-toast': {
    title: 'アボカドトースト',
    image: 'images/greek_yogurt_berries.png',
    calories: '320kcal',
    time: '10分',
    protein: '12g',
    ingredients: [
      '全粒粉パン 1枚',
      'アボカド 1/2個',
      'ミニトマト 3個',
      'レモン汁 少々',
      '塩・こしょう 適量',
      'オリーブオイル 少々'
    ],
    steps: [
      'パンをトーストします。',
      'アボカドをつぶしてレモン汁、塩・こしょうを混ぜます。',
      'トーストにアボカドを塗ります。',
      'ミニトマトをのせ、オリーブオイルをかけて完成です。'
    ]
  },
  'tofu-miso': {
    title: '豆腐とキノコの味噌汁定食',
    image: 'images/tofu_steak_vegetables.png',
    calories: '350kcal',
    time: '15分',
    protein: '18g',
    ingredients: [
      '絹豆腐 150g',
      'しめじ 50g',
      'えのき 50g',
      'わかめ 適量',
      '味噌 大さじ1',
      'だし汁 400ml',
      '玄米ご飯 100g'
    ],
    steps: [
      'だし汁を沸かします。',
      'キノコと豆腐を加えて煮ます。',
      '味噌を溶き入れ、わかめを加えます。',
      '玄米ご飯と一緒に盛り付けて完成です。'
    ]
  },
  'chicken-lemon': {
    title: '鶏ささみのレモンペッパー焼き',
    image: 'images/grilled_chicken_salad.png',
    calories: '390kcal',
    time: '20分',
    protein: '38g',
    ingredients: [
      '鶏ささみ 200g',
      'レモン 1/2個',
      '黒こしょう 適量',
      'オリーブオイル 大さじ1',
      '塩 少々',
      'パセリ 適量'
    ],
    steps: [
      'ささみに塩・こしょうをします。',
      'フライパンにオリーブオイルを熱し、ささみを焼きます。',
      'レモン汁をかけて蒸し焼きにします。',
      'パセリを散らして完成です。'
    ]
  },
  'protein-pancake': {
    title: 'プロテインパンケーキ',
    image: 'images/oatmeal_banana.png',
    calories: '290kcal',
    time: '15分',
    protein: '22g',
    ingredients: [
      'プロテインパウダー 30g',
      '卵 1個',
      'バナナ 1本',
      'ベーキングパウダー 小さじ1/2',
      'はちみつ 適量',
      'ベリー 適量'
    ],
    steps: [
      'バナナをつぶし、卵とプロテインパウダーを混ぜます。',
      'ベーキングパウダーを加えて混ぜます。',
      'フライパンで両面を焼きます。',
      'はちみつとベリーをトッピングして完成です。'
    ]
  },
  'shrimp-avocado': {
    title: 'エビとアボカドのサラダ',
    image: 'images/salmon_poke_bowl.png',
    calories: '360kcal',
    time: '15分',
    protein: '24g',
    ingredients: [
      'エビ 150g',
      'アボカド 1個',
      'ミックスリーフ 100g',
      'レモン汁 大さじ1',
      'オリーブオイル 大さじ1',
      '塩・こしょう 適量'
    ],
    steps: [
      'エビを茹でて冷まします。',
      'アボカドを角切りにします。',
      'ミックスリーフと一緒に盛り付けます。',
      'レモン汁とオリーブオイルをかけて完成です。'
    ]
  },
  'konjac-pad-thai': {
    title: 'こんにゃく麺のパッタイ風',
    image: 'images/tofu_steak_vegetables.png',
    calories: '340kcal',
    time: '25分',
    protein: '16g',
    ingredients: [
      'こんにゃく麺 200g',
      'エビ 100g',
      'もやし 100g',
      '卵 1個',
      'ナンプラー 大さじ1',
      'レモン 1/4個',
      'ピーナッツ 適量'
    ],
    steps: [
      'こんにゃく麺を水洗いします。',
      'フライパンでエビと卵を炒めます。',
      'もやしと麺を加えて炒めます。',
      'ナンプラーで味付けし、レモンとピーナッツをトッピングして完成です。'
    ]
  },
  'granola': {
    title: 'フルーツとナッツのグラノーラ',
    image: 'images/smoothie_bowl.png',
    calories: '310kcal',
    time: '5分',
    protein: '8g',
    ingredients: [
      'グラノーラ 50g',
      '無糖ヨーグルト 150g',
      'バナナ 1/2本',
      'ブルーベリー 30g',
      'アーモンド 10粒',
      'はちみつ 小さじ1'
    ],
    steps: [
      'ボウルにヨーグルトを入れます。',
      'グラノーラをのせます。',
      'フルーツとナッツをトッピングします。',
      'はちみつをかけて完成です。'
    ]
  },
  'chicken-pho': {
    title: '鶏むね肉のフォー',
    image: 'images/salmon_poke_bowl.png',
    calories: '380kcal',
    time: '20分',
    protein: '26g',
    ingredients: [
      'フォー(乾麺) 80g',
      '鶏むね肉 100g',
      'もやし 50g',
      'パクチー 適量',
      '鶏がらスープ 500ml',
      'ナンプラー 大さじ1',
      'レモン 1/4個'
    ],
    steps: [
      'フォーを茹でます。',
      '鶏がらスープを温め、鶏肉を茹でます。',
      '器にフォーと鶏肉を盛ります。',
      'スープを注ぎ、もやしとパクチー、レモンを添えて完成です。'
    ]
  },
  'tofu-burger': {
    title: '豆腐ハンバーグ',
    image: 'images/tofu_steak_vegetables.png',
    calories: '410kcal',
    time: '30分',
    protein: '22g',
    ingredients: [
      '木綿豆腐 200g',
      '鶏ひき肉 100g',
      '玉ねぎ 1/2個',
      'パン粉 大さじ2',
      '卵 1/2個',
      '塩・こしょう 適量',
      '大根おろし 適量'
    ],
    steps: [
      '豆腐を水切りし、つぶします。',
      'ひき肉、玉ねぎ、パン粉、卵を混ぜます。',
      'ハンバーグの形に整えて焼きます。',
      '大根おろしを添えて完成です。'
    ]
  },
  'egg-white': {
    title: 'エッグホワイトオムレツ',
    image: 'images/greek_yogurt_berries.png',
    calories: '260kcal',
    time: '15分',
    protein: '20g',
    ingredients: [
      '卵白 4個分',
      'ほうれん草 50g',
      'トマト 1/2個',
      'チーズ 20g',
      'オリーブオイル 小さじ1',
      '塩・こしょう 適量'
    ],
    steps: [
      '卵白を泡立てます。',
      'フライパンで野菜を炒めます。',
      '卵白を流し入れて焼きます。',
      'チーズをのせて半分に折り、完成です。'
    ]
  },
  'tuna-avocado': {
    title: 'まぐろとアボカドの丼',
    image: 'images/salmon_poke_bowl.png',
    calories: '420kcal',
    time: '10分',
    protein: '30g',
    ingredients: [
      'まぐろ刺身 120g',
      'アボカド 1/2個',
      '玄米ご飯 100g',
      'しょうゆ 大さじ1',
      'わさび 適量',
      '海苔 適量',
      '白ごま 適量'
    ],
    steps: [
      'まぐろを角切りにします。',
      'アボカドも角切りにします。',
      '玄米ご飯の上にまぐろとアボカドをのせます。',
      'しょうゆとわさび、海苔、ごまをトッピングして完成です。'
    ]
  },
  'veggie-hotpot': {
    title: '野菜たっぷり鍋',
    image: 'images/tofu_steak_vegetables.png',
    calories: '350kcal',
    time: '25分',
    protein: '18g',
    ingredients: [
      '白菜 200g',
      '豆腐 150g',
      'しいたけ 4個',
      'えのき 100g',
      'にんじん 1/2本',
      '鶏がらスープ 600ml',
      'ポン酢 適量'
    ],
    steps: [
      '野菜を食べやすい大きさに切ります。',
      '鍋にスープを沸かします。',
      '野菜と豆腐を入れて煮ます。',
      'ポン酢でいただいて完成です。'
    ]
  }
};

// Day Tab Switching
document.addEventListener('DOMContentLoaded', function () {
  const dayTabs = document.querySelectorAll('.day-tab');
  const dayContents = document.querySelectorAll('.day-content');

  dayTabs.forEach(tab => {
    tab.addEventListener('click', function () {
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
    card.addEventListener('click', function () {
      const recipeId = this.getAttribute('data-recipe');
      const recipe = recipeData[recipeId];

      if (recipe) {
        openModal(recipe);
      }
    });
  });

  // Close modal when clicking outside
  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

  const observer = new IntersectionObserver(function (entries) {
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
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});
