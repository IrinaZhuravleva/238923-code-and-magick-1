var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var WIZARD_NAMES = ['Иван','Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья','Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + " " + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYE_COLOR[Math.floor(Math.random() * WIZARD_EYE_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + " " + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYE_COLOR[Math.floor(Math.random() * WIZARD_EYE_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + " " + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYE_COLOR[Math.floor(Math.random() * WIZARD_EYE_COLOR.length)]
  },
  {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + " " + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLOR.length)],
    eyesColor: WIZARD_EYE_COLOR[Math.floor(Math.random() * WIZARD_EYE_COLOR.length)]
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

// ?

(function () {

var userDialog = document.querySelector('.setup');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
  window.util.isEscEvent(evt, closePopup);
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener ('invalid', function (evt) {
  if (!userNameInput.validity.valid) {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    }
  } else {
    userNameInput.setCustomValidity('');
  }
});

setupOpen.addEventListener('click', function() {
  openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
  window.util.isEnterEvent(evt, openPopup);
});

setupClose.addEventListener('click', function() {
  closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
  window.util.isEnterEvent(evt, closePopup);
});

userNameInput.addEventListener('input', function (evt) {
  var target = evt.target;
  if (target.value.length < 2) {
    target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else {
    target.setCustomValidity('');
  }
});

(function () {

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    }
  };
})();


var wizardCoatPopup = document.querySelector('.wizard-coat');
var wizardEyesPopup = document.querySelector('.wizard-eyes');
var fireballPopup = document.querySelector('.setup-fireball-wrap');

window.colorize(wizardCoatPopup, function (color) {
    wizardCoatPopup.style.fill = color;
  });
window.colorize(wizardEyesPopup, function (color) {
    wizardEyesPopup.style.backgroundColor = color;
  });
window.colorize(fireballPopup, function (color) {
    fireball.style.backgroundColor = color;
  });

})();


(function () {
  var COLORS = ['red', 'green', 'blue'];

  var getRandomColor = function () {
    return COLORS[Math.floor(COLORS.length * Math.random())];
  };

  window.colorize = function (element) {
    element.addEventListener('click', function () {
      var color = getRandomColor();
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
    })
  }
})();
