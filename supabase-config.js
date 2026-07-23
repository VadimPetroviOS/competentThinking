// Общий клиент Supabase для всего проекта.
// Подключать после <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
window.sb = supabase.createClient(
  'https://oglcidjwqfwpqjsncyyg.supabase.co',
  'sb_publishable_CNzXxjHdHC5YmMqgAsUG1Q_mtNt_ju9'
);

// Небольшой помощник: получить текущую сессию (или null)
async function sbGetSession(){
  const { data } = await window.sb.auth.getSession();
  return data.session;
}

// Помощник: разлогинить и уйти на экран входа
async function sbLogout(){
  await window.sb.auth.signOut();
  window.location.href = 'login.html';
}
