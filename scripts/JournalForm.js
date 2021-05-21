


<section class="forms__fullstack">
        <h2 class="subtitle--dailyentry">Daily Journal Entry</h2>
        <form class="form__date">
          <fieldset class="input__fullsatck">
            <label for="entryDate">Date:</label>
            <input type="date" name="entryDate" min="2021-04-05" id="entryForm__date"/>
          </fieldset>
          <fieldset class="input__fullsatck">
            <label for="entryConcepts">Concepts Covered:</label>
            <input type="text" name="entryConcepts" id="entryForm__concepts"/>
          </fieldset>
          <fieldset class="input__fullsatck">
            <label for="entryJournal">Journal Entry:</label>
            <input type="text" name="entryJournal" id="entryForm__journal"/>            
          </fieldset>
          <fieldset class="input__fullsatck">
            <label for="entryMood">Mood:</label>
            <select id="entryForm__mood">
              <option value="happy">Happy</option>
              <option value="confused">Confused</option>
              <option value="frustated">Frustated</option>
              <option value="eh">Eh</option>
              <option value="excited">Excited</option>
              <option value="over this">Over This</option>
              <option value="learning">Learning</option>
              <option value="ok">OK</option>
              <option value="sad">Sad</option>
              <option value="hopeful">Hopeful</option>
            </select>
          </fieldset>
          <fieldset class="input__fullsatck">
            <input type="submit" id="entryForm__submit" value="Record Journal Entry"/>
          </fieldset>
        </form>
      </section>

      <section class=""></section>

      <article id="entries"></article>

      <section class=""></section>