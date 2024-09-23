function toggleNav() {
    const conversationList = document.querySelector('.attachment-dropdown');
    if (conversationList.style.display === 'flex') {
        conversationList.style.display = 'none';
    } else {
        conversationList.style.display = 'flex';
    }
}