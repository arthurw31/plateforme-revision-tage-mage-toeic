// Maintient le projet Supabase éveillé.
//
// Sur l'offre gratuite, un projet sans aucune requête pendant environ une
// semaine est mis en pause : la base devient inaccessible, et avec elle la
// connexion Google, la synchro et le tuteur IA. Vercel appelle cette route
// une fois par jour (voir « crons » dans vercel.json) ; une simple lecture
// suffit à faire repartir le compteur d'inactivité.
//
// La clé « publishable » est publique par conception : les données sont
// protégées par Row Level Security. Aucun secret n'est nécessaire ici.
const SB_URL = 'https://afivqfrjsehykdbqvcps.supabase.co';
const SB_KEY = 'sb_publishable_g3YdBdnDb3Egckiud71aZQ_Cj5W6TeT';

module.exports = async (req, res) => {
  const url = `${SB_URL}/rest/v1/progress?select=user_id&limit=1`;
  try {
    const r = await fetch(url, {
      headers: { apikey: SB_KEY, authorization: `Bearer ${SB_KEY}` },
      signal: AbortSignal.timeout(20000)
    });
    // 200 (lecture autorisée) comme 401/403 (RLS refuse, mais le serveur
    // répond) prouvent que le projet est bien éveillé.
    const awake = [200, 401, 403].includes(r.status);
    res.status(awake ? 200 : 502).json({ awake, status: r.status, at: new Date().toISOString() });
  } catch (e) {
    res.status(502).json({ awake: false, error: String(e && e.message || e) });
  }
};
