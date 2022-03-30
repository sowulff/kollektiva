import Link from "next/link";
import { supabase } from "../../utils/supabaseClient";

export default () => {
  return (
    <div>
      <h1>Så går det till!</h1>
      <div>
        <ol>
          <li>
            <h4>Skapa ett konto eller logga in</h4>
            <p>
              Skapa ett konto om dig själv för att få allt sparat på ett och
              samma ställe. Självklart är det gratis.{" "}
            </p>
          </li>
          <li>
            <h4>Berätta om din bostad</h4>
            <p>
              Berätta om din bostad i vårat färdiga formulär för att du ska
              kunna hitta rätt person som ska hyra. .{" "}
            </p>
          </li>
          <li>
            <h4>Lägg till dina bekvämligheter.</h4>
            <p>
              Beskriv vad som gör din bostad speciell - vare sig ifall det vore
              en fin tomt, eller ett husdjur man skall ta hand om.
            </p>
          </li>
          <li>
            <h4>Dubbelkolla att allting stämmer.</h4>
            <p>
              Dubbelkolla att allting stämmer och puplicera din annons. Nu är
              det bara att luta dig tillbaka och vänta på rätt hyresgäst.
            </p>
          </li>
        </ol>
      </div>
      <Link href="/new/register" replace>
        <a>nästa</a>
      </Link>
    </div>
  );
};
