<template>
    <form>
        <div class="form-group">
            <label for="bookName" class="mb-1">Nome da obra</label>
<input type="text" class="form-control" id="bookName" placeholder="Solo Leveling">
        </div>
        <div class="form-group my-4">
            <label for="bookType" class="mb-1">Tipo do livro</label>
    <select class="form-control" id="bookType">
      <option>Manhuá (China)</option>
      <option>Manhwa (Coréia)</option>
    </select>
        </div>
<div class="form-group my-4">
      <label for="formFile" class="form-label">Capítulo inicial <span class='text-secondary'>(em pdf)</span> </label>
  <input class="form-control" type="file" id="formFile">
      </div>
<div class="form-group my-4">
            <label for="bookName" class="mb-1">Título do capítulo inicial da obra</label>
<input type="text" class="form-control" id="bookName" placeholder="A Invasão de Carlindo">
        </div>
        <div>
    <button type="submit" class="btn btn-primary btn-lg">Criar</button>
<router-link to='/dashboard'>
<button class="btn btn-secondary ms-4">Voltar</button>
</router-link>
        </div>
    </form>

</template>
