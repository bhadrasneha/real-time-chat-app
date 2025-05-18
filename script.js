 const input = document.getElementById('message-input');
    const messages = document.getElementById('messages');
    const typingIndicator = document.getElementById('typing-indicator');
    const emojiPicker = document.getElementById('emoji-picker');

    let typingTimeout;

    input.addEventListener('input', () => {
      typingIndicator.style.display = 'block';
      clearTimeout(typingTimeout);
      typingTimeout = setTimeout(() => {
        typingIndicator.style.display = 'none';
      }, 1500);
    });

    function sendMessage() {
      const text = input.value.trim();
      if (text !== '') {
        const msg = document.createElement('div');
        msg.classList.add('message', 'self');
        msg.innerHTML = `${text}<img src="https://i.pravatar.cc/30?u=me" />`;
        messages.appendChild(msg);
        input.value = '';
        typingIndicator.style.display = 'none';
        messages.scrollTop = messages.scrollHeight;

        setTimeout(() => {
          const reply = document.createElement('div');
          reply.classList.add('message', 'other');
          reply.innerHTML = `<img src="https://i.pravatar.cc/30?u=alice" />Nice! Let’s win this! 💪`;
          messages.appendChild(reply);
          messages.scrollTop = messages.scrollHeight;
        }, 1000);
      }
    }

    function toggleEmojiPicker() {
      emojiPicker.style.display = emojiPicker.style.display === 'none' ? 'block' : 'none';
    }

    function addEmoji(emoji) {
      input.value += emoji;
      input.focus();
    }