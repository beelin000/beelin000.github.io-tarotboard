// 韦特塔罗牌数据
const tarotDeck = {
    majorArcana: [
        { name: "愚者", image: "tarot_images/0-fool.png", upright: "新的开始,冒险,自由", reversed: "鲁莽,风险,犹豫" },
        { name: "魔术师", image: "tarot_images/1-magician.png", upright: "意志力,技能,专注", reversed: "操纵,欺骗,未使用的才能" },
        { name: "女祭司", image: "tarot_images/2-highpriestess.png", upright: "直觉,神秘,潜意识", reversed: "隐藏的信息,忽视直觉" },
        { name: "皇后", image: "tarot_images/3-empress.png", upright: "养育,丰富,感性", reversed: "依赖,忽视,过度放纵" },
        { name: "皇帝", image: "tarot_images/4-emperor.png", upright: "权威,结构,控制", reversed: "专制,僵化,控制欲" },
        { name: "教皇", image: "tarot_images/5-hierophant.png", upright: "传统,信仰,教育", reversed: "叛逆,非常规信仰" },
        { name: "恋人", image: "tarot_images/6-lovers.png", upright: "爱,和谐,关系", reversed: "不平衡,冲突,选择" },
        { name: "战车", image: "tarot_images/7-chariot.png", upright: "意志力,胜利,决心", reversed: "缺乏方向,侵略,控制不足" },
        { name: "力量", image: "tarot_images/8-strength.png", upright: "勇气,耐心,控制", reversed: "自我怀疑,软弱,缺乏纪律" },
        { name: "隐士", image: "tarot_images/9-hermit.png", upright: "内省,孤独,寻求", reversed: "孤立,孤独,拒绝帮助" },
        { name: "命运之轮", image: "tarot_images/10-wheel.png", upright: "命运,变化,转折点", reversed: "抵抗变化,坏运气" },
        { name: "正义", image: "tarot_images/11-justice.png", upright: "公平,真相,法律", reversed: "不公正,偏见,不负责任" },
        { name: "倒吊人", image: "tarot_images/12-hangedman.png", upright: "牺牲,新视角,等待", reversed: "拖延,抗拒牺牲" },
        { name: "死神", image: "tarot_images/13-death.png", upright: "结束,转变,过渡", reversed: "抗拒改变,停滞" },
        { name: "节制", image: "tarot_images/14-temperance.png", upright: "平衡,调和,耐心", reversed: "不平衡,极端,缺乏和谐" },
        { name: "恶魔", image: "tarot_images/15-devil.png", upright: "束缚,物质主义,成瘾", reversed: "摆脱束缚,克服成瘾" },
        { name: "塔", image: "tarot_images/16-tower.png", upright: "突然变化,启示,崩溃", reversed: "避免灾难,害怕改变" },
        { name: "星星", image: "tarot_images/17-star.png", upright: "希望,灵感,平静", reversed: "绝望,缺乏信心,失望" },
        { name: "月亮", image: "tarot_images/18-moon.png", upright: "幻觉,恐惧,潜意识", reversed: "清晰,理解恐惧" },
        { name: "太阳", image: "tarot_images/19-sun.png", upright: "快乐,成功,活力", reversed: "暂时的挫折,缺乏成功" },
        { name: "审判", image: "tarot_images/20-judgement.png", upright: "觉醒,重生,内省", reversed: "自我怀疑,缺乏觉醒" },
        { name: "世界", image: "tarot_images/21-world.png", upright: "完成,成就,旅行", reversed: "未完成,缺乏成就感" }
    ],
    minorArcana: {
        wands: [
            { name: "权杖王牌", image: "tarot_images/wands-ace.png", upright: "创造力,灵感,新冒险", reversed: "延迟,缺乏激情" },
            { name: "权杖二", image: "tarot_images/wands-2.png", upright: "计划,决策", reversed: "优柔寡断,缺乏计划" },
            { name: "权杖三", image: "tarot_images/wands-3.png", upright: "扩张,远见", reversed: "限制,缺乏远见" },
            { name: "权杖四", image: "tarot_images/wands-4.png", upright: "庆祝,和谐", reversed: "过渡,不稳定" },
            { name: "权杖五", image: "tarot_images/wands-5.png", upright: "冲突,竞争", reversed: "避免冲突,解决" },
            { name: "权杖六", image: "tarot_images/wands-6.png", upright: "胜利,进步", reversed: "挫折,缺乏认可" },
            { name: "权杖七", image: "tarot_images/wands-7.png", upright: "坚持,挑战", reversed: "放弃,不知所措" },
            { name: "权杖八", image: "tarot_images/wands-8.png", upright: "快速行动,进展", reversed: "延迟,挫折" },
            { name: "权杖九", image: "tarot_images/wands-9.png", upright: "韧性,警惕", reversed: "固执,防御" },
            { name: "权杖十", image: "tarot_images/wands-10.png", upright: "负担,责任", reversed: "释放,简化" },
            { name: "权杖侍从", image: "tarot_images/wands-page.png", upright: "热情,新想法", reversed: "缺乏方向,不可靠" },
            { name: "权杖骑士", image: "tarot_images/wands-knight.png", upright: "行动,冒险", reversed: "鲁莽,冲动" },
            { name: "权杖皇后", image: "tarot_images/wands-queen.png", upright: "活力,自信", reversed: "嫉妒,不可靠" },
            { name: "权杖国王", image: "tarot_images/wands-king.png", upright: "领导力,远见", reversed: "专制,不宽容" }
        ],
        cups: [
            { name: "圣杯王牌", image: "tarot_images/cups-ace.png", upright: "新情感,直觉", reversed: "情感混乱,压抑" },
            { name: "圣杯二", image: "tarot_images/cups-2.png", upright: "和谐,伙伴关系", reversed: "不平衡,冲突" },
            { name: "圣杯三", image: "tarot_images/cups-3.png", upright: "庆祝,友谊", reversed: "过度放纵,流言" },
            { name: "圣杯四", image: "tarot_images/cups-4.png", upright: "冥想,不满", reversed: "新机会,接受" },
            { name: "圣杯五", image: "tarot_images/cups-5.png", upright: "失落,悲伤", reversed: "接受,宽恕" },
            { name: "圣杯六", image: "tarot_images/cups-6.png", upright: "怀旧,童年", reversed: "活在当下,前进" },
            { name: "圣杯七", image: "tarot_images/cups-7.png", upright: "选择,幻想", reversed: "决定,清晰" },
            { name: "圣杯八", image: "tarot_images/cups-8.png", upright: "离开,寻找", reversed: "犹豫,恐惧改变" },
            { name: "圣杯九", image: "tarot_images/cups-9.png", upright: "满足,愿望", reversed: "过度放纵,不满" },
            { name: "圣杯十", image: "tarot_images/cups-10.png", upright: "和谐,幸福", reversed: "不和谐,破碎的家庭" },
            { name: "圣杯侍从", image: "tarot_images/cups-page.png", upright: "敏感,创意", reversed: "情绪不稳定,不成熟" },
            { name: "圣杯骑士", image: "tarot_images/cups-knight.png", upright: "浪漫,魅力", reversed: "情绪化,不可靠" },
            { name: "圣杯皇后", image: "tarot_images/cups-queen.png", upright: "同情,直觉", reversed: "情绪不稳定,抑郁" },
            { name: "圣杯国王", image: "tarot_images/cups-king.png", upright: "智慧,情感控制", reversed: "情绪操纵,冷酷" }
        ],
        swords: [
            { name: "宝剑王牌", image: "tarot_images/swords-ace.png", upright: "突破,新想法", reversed: "混乱,破坏" },
            { name: "宝剑二", image: "tarot_images/swords-2.png", upright: "僵局,避免", reversed: "艰难选择,真相" },
            { name: "宝剑三", image: "tarot_images/swords-3.png", upright: "心碎,悲伤", reversed: "恢复,宽恕" },
            { name: "宝剑四", image: "tarot_images/swords-4.png", upright: "休息,恢复", reversed: "疲惫,倦怠" },
            { name: "宝剑五", image: "tarot_images/swords-5.png", upright: "冲突,胜利", reversed: "和解,妥协" },
            { name: "宝剑六", image: "tarot_images/swords-6.png", upright: "过渡,离开", reversed: "停滞,无法前进" },
            { name: "宝剑七", image: "tarot_images/swords-7.png", upright: "欺骗,策略", reversed: "坦白,意识" },
            { name: "宝剑八", image: "tarot_images/swords-8.png", upright: "限制,无力", reversed: "自由,新视角" },
            { name: "宝剑九", image: "tarot_images/swords-9.png", upright: "焦虑,恐惧", reversed: "希望,释放" },
            { name: "宝剑十", image: "tarot_images/swords-10.png", upright: "结束,痛苦", reversed: "恢复,改善" },
            { name: "宝剑侍从", image: "tarot_images/swords-page.png", upright: "好奇心,学习", reversed: "恶意,欺骗" },
            { name: "宝剑骑士", image: "tarot_images/swords-knight.png", upright: "行动,决心", reversed: "冲动,不计后果" },
            { name: "宝剑皇后", image: "tarot_images/swords-queen.png", upright: "独立,清晰", reversed: "冷酷,无情" },
            { name: "宝剑国王", image: "tarot_images/swords-king.png", upright: "权威,真理", reversed: "操纵,残酷" }
        ],
        pentacles: [
            { name: "星币王牌", image: "tarot_images/pentacles-ace.png", upright: "繁荣,新机会", reversed: "错失机会,缺乏计划" },
            { name: "星币二", image: "tarot_images/pentacles-2.png", upright: "平衡,适应", reversed: "不平衡,混乱" },
            { name: "星币三", image: "tarot_images/pentacles-3.png", upright: "团队合作,学习", reversed: "缺乏合作,平庸" },
            { name: "星币四", image: "tarot_images/pentacles-4.png", upright: "保存,控制", reversed: "贪婪,物质主义" },
            { name: "星币五", image: "tarot_images/pentacles-5.png", upright: "困难,贫困", reversed: "恢复,慈善" },
            { name: "星币六", image: "tarot_images/pentacles-6.png", upright: "慷慨,分享", reversed: "自私,债务" },
            { name: "星币七", image: "tarot_images/pentacles-7.png", upright: "耐心,投资", reversed: "缺乏回报,挫折" },
            { name: "星币八", image: "tarot_images/pentacles-8.png", upright: "工艺,专注", reversed: "缺乏质量,匆忙" },
            { name: "星币九", image: "tarot_images/pentacles-9.png", upright: "丰富,独立", reversed: "过度依赖,物质主义" },
            { name: "星币十", image: "tarot_images/pentacles-10.png", upright: "财富,家庭", reversed: "财务问题,家庭冲突" },
            { name: "星币侍从", image: "tarot_images/pentacles-page.png", upright: "学习,勤奋", reversed: "懒惰,缺乏动力" },
            { name: "星币骑士", image: "tarot_images/pentacles-knight.png", upright: "责任,效率", reversed: "懒惰,不可靠" },
            { name: "星币皇后", image: "tarot_images/pentacles-queen.png", upright: "繁荣,务实", reversed: "物质主义,嫉妒" },
            { name: "星币国王", image: "tarot_images/pentacles-king.png", upright: "财富,商业", reversed: "贪婪,操纵" }
        ]
    }
};

// 创建完整的牌组
function createFullDeck() {
    let deck = [];
    
    // 添加大阿卡纳
    deck = deck.concat(tarotDeck.majorArcana);
    
    // 添加小阿卡纳
    for (let suit in tarotDeck.minorArcana) {
        deck = deck.concat(tarotDeck.minorArcana[suit]);
    }
    
    return deck;
}

// 洗牌函数
function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

// 随机决定牌是否逆位
function determineOrientation() {
    return Math.random() > 0.5 ? 'upright' : 'reversed';
}

// DOM元素
const askBtn = document.getElementById('ask-btn');
const questionInput = document.getElementById('question');
const spreadSelect = document.getElementById('spread');
const shufflingMessage = document.getElementById('shuffling-message');
const cardDisplay = document.getElementById('card-display');
const spreadContainer = document.getElementById('spread-container');
const interpretBtn = document.getElementById('interpret-btn');
const interpretation = document.getElementById('interpretation');
const interpretationContent = document.getElementById('interpretation-content');
const newReadingBtn = document.getElementById('new-reading-btn');

// 当前占卜状态
let currentReading = {
    question: '',
    spreadType: '',
    cards: [],
    deck: []
};

// 开始占卜
askBtn.addEventListener('click', startReading);

function startReading() {
    const question = questionInput.value.trim();
    const spreadType = spreadSelect.value;
    
    if (!question) {
        alert('请输入你的问题');
        return;
    }
    
    // 更新状态
    currentReading.question = question;
    currentReading.spreadType = spreadType;
    
    // 创建并洗牌
    currentReading.deck = shuffleDeck(createFullDeck());
    
    // 根据牌阵抽牌
    switch(spreadType) {
        case 'three-card':
            currentReading.cards = [
                { card: currentReading.deck.pop(), position: '过去', orientation: determineOrientation() },
                { card: currentReading.deck.pop(), position: '现在', orientation: determineOrientation() },
                { card: currentReading.deck.pop(), position: '未来', orientation: determineOrientation() }
            ];
            break;
        case 'single-card':
            currentReading.cards = [
                { card: currentReading.deck.pop(), position: '指引', orientation: determineOrientation() }
            ];
            break;
    }
    
    // 显示牌阵
    displaySpread();
    
    // 更新UI
    shufflingMessage.classList.add('hidden');
    cardDisplay.classList.remove('hidden');
    interpretation.classList.add('hidden');
}

// 显示牌阵
function displaySpread() {
    spreadContainer.innerHTML = '';
    
    // 添加标题
    const spreadTitle = document.createElement('h3');
    spreadTitle.className = 'spread-title';
    spreadTitle.textContent = currentReading.spreadType === 'three-card' ? '三张牌阵（过去-现在-未来）' : '单张牌指引';
    spreadContainer.appendChild(spreadTitle);
    
    // 添加牌位
    currentReading.cards.forEach((cardInfo, index) => {
        const cardSlot = document.createElement('div');
        cardSlot.className = 'card-slot';
        cardSlot.dataset.index = index;
        
        // 牌背
        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.textContent = '?';
        
        // 牌面
        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        
        // 这里应该使用实际的牌图像URL
        const cardImg = document.createElement('img');
        cardImg.src = cardInfo.card.image;
        cardImg.alt = cardInfo.card.name;
        
        const cardName = document.createElement('div');
        cardName.className = 'card-name';
        cardName.textContent = cardInfo.card.name;
        
        const cardPosition = document.createElement('div');
        cardPosition.className = 'card-position';
        cardPosition.textContent = cardInfo.position + (cardInfo.orientation === 'reversed' ? ' (逆位)' : '');
        
        cardFront.appendChild(cardImg);
        cardFront.appendChild(cardName);
        cardFront.appendChild(cardPosition);
        
        cardSlot.appendChild(cardBack);
        cardSlot.appendChild(cardFront);
        
        // 点击翻牌
        cardSlot.addEventListener('click', function() {
            this.classList.add('revealed');
        });
        
        spreadContainer.appendChild(cardSlot);
    });
}

// 解读牌面
interpretBtn.addEventListener('click', interpretReading);

function interpretReading() {
    interpretationContent.innerHTML = '';
    
    // 添加问题
    const questionElement = document.createElement('div');
    questionElement.innerHTML = `<h4>问题:</h4><p>${currentReading.question}</p>`;
    interpretationContent.appendChild(questionElement);
    
    // 添加每张牌的解读
    currentReading.cards.forEach(cardInfo => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-meaning';
        
        const meaning = cardInfo.orientation === 'upright' ? 
            cardInfo.card.upright : cardInfo.card.reversed;
        
        cardElement.innerHTML = `
            <h4>${cardInfo.card.name} (${cardInfo.position}) ${cardInfo.orientation === 'reversed' ? '逆位' : ''}</h4>
            <p><strong>含义:</strong> ${meaning}</p>
        `;
        
        interpretationContent.appendChild(cardElement);
    });
    
    // 添加整体解读
    const overallElement = document.createElement('div');
    overallElement.className = 'overall-meaning';
    
    if (currentReading.spreadType === 'three-card') {
        overallElement.innerHTML = `
            <h4>整体解读</h4>
            <p>这张牌阵展示了你的问题在过去、现在和未来的发展轨迹。</p>
            <p><strong>过去:</strong> ${currentReading.cards[0].card.name} 表示 ${currentReading.cards[0].orientation === 'upright' ? currentReading.cards[0].card.upright : currentReading.cards[0].card.reversed}。</p>
            <p><strong>现在:</strong> ${currentReading.cards[1].card.name} 表示 ${currentReading.cards[1].orientation === 'upright' ? currentReading.cards[1].card.upright : currentReading.cards[1].card.reversed}。</p>
            <p><strong>未来:</strong> ${currentReading.cards[2].card.name} 表示 ${currentReading.cards[2].orientation === 'upright' ? currentReading.cards[2].card.upright : currentReading.cards[2].card.reversed}。</p>
            <p>从这三张牌的关系来看，${getRelationshipInterpretation()}</p>
        `;
    } else {
        overallElement.innerHTML = `
            <h4>整体解读</h4>
            <p>这张牌为你当前的问题提供了直接的指引。</p>
            <p>${currentReading.cards[0].card.name} (${currentReading.cards[0].orientation === 'upright' ? '正位' : '逆位'}) 表示: ${currentReading.cards[0].orientation === 'upright' ? currentReading.cards[0].card.upright : currentReading.cards[0].card.reversed}。</p>
            <p>这张牌建议你 ${getAdviceForSingleCard()}。</p>
        `;
    }
    
    interpretationContent.appendChild(overallElement);
    
    // 显示解读
    cardDisplay.classList.add('hidden');
    interpretation.classList.remove('hidden');
}

// 获取三张牌关系的解读
function getRelationshipInterpretation() {
    const past = currentReading.cards[0];
    const present = currentReading.cards[1];
    const future = currentReading.cards[2];
    
    // 这里可以根据牌的组合提供更具体的解读
    // 这是一个简化的示例，实际应用中可能需要更复杂的逻辑
    
    if (past.orientation === 'upright' && present.orientation === 'upright' && future.orientation === 'upright') {
        return "这是一个积极的趋势，表明你的情况正在改善或保持稳定。";
    } else if (past.orientation === 'reversed' && present.orientation === 'upright' && future.orientation === 'upright') {
        return "你似乎已经克服了过去的困难，未来看起来更加光明。";
    } else if (past.orientation === 'upright' && present.orientation === 'reversed' && future.orientation === 'upright') {
        return "虽然目前面临挑战，但未来仍有希望。坚持度过当前的困难时期。";
    } else if (past.orientation === 'upright' && present.orientation === 'upright' && future.orientation === 'reversed') {
        return "虽然过去和现在都很好，但未来可能需要警惕潜在的问题。";
    } else if (past.orientation === 'reversed' && present.orientation === 'reversed' && future.orientation === 'reversed') {
        return "这可能是一个充满挑战的时期，但记住塔罗牌展示的是潜在趋势而非确定性结果。你可以通过行动改变结果。";
    } else {
        return "这张牌阵显示了一个复杂的情况，既有积极的方面也有需要警惕的地方。仔细思考每张牌的含义以及它们之间的关系。";
    }
}

// 获取单张牌的建议
function getAdviceForSingleCard() {
    const card = currentReading.cards[0];
    
    if (card.orientation === 'upright') {
        if (card.card.name === "愚者") {
            return "拥抱新的开始，不要害怕冒险。";
        } else if (card.card.name === "魔术师") {
            return "利用你的技能和资源来实现目标。";
        } else if (card.card.name === "女祭司") {
            return "倾听你的直觉和内在智慧。";
        } else if (card.card.name === "皇后") {
            return "培养和滋养你关心的人和项目。";
        } else if (card.card.name === "皇帝") {
            return "建立结构和纪律来实现你的目标。";
        } else {
            return "专注于牌的正位含义，并将其应用到你的情况中。";
        }
    } else {
        if (card.card.name === "愚者") {
            return "在行动前仔细考虑，避免不必要的风险。";
        } else if (card.card.name === "魔术师") {
            return "确保你完全掌握了所需的技能，不要过度自信。";
        } else if (card.card.name === "女祭司") {
            return "不要忽视你的直觉，但也要考虑实际因素。";
        } else if (card.card.name === "皇后") {
            return "避免过度放纵或忽视自己的需求。";
        } else if (card.card.name === "皇帝") {
            return "避免过于严格或控制，寻找平衡。";
        } else {
            return "注意牌的逆位警告，并考虑如何避免或解决这些问题。";
        }
    }
}

// 新的占卜
newReadingBtn.addEventListener('click', resetReading);

function resetReading() {
    questionInput.value = '';
    interpretation.classList.add('hidden');
    shufflingMessage.classList.remove('hidden');
    currentReading = {
        question: '',
        spreadType: '',
        cards: [],
        deck: []
    };
}