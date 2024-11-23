import { html } from "lit-html";
import page from "page";
import catsApi from "../../api/catsApi";

const template = (onSubmit) => html`
<form @submit=${onSubmit}>
  <div class="space-y-12" style="width: 900px; margin: auto;">
    

    <div class="border-b border-gray-900/10 pb-12">
      <h2 class="text-base/7 font-semibold text-gray-900">Create Rent a Cat Information</h2>
      <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
            <div class="sm:col-span-3">
                <label for="name" class="block text-sm/6 font-medium text-gray-900">Cat Name</label>
                <div class="mt-2">
                    <input type="text" name="name" id="name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="age" class="block text-sm/6 font-medium text-gray-900">Age</label>
                <div class="mt-2">
                    <input type="number" name="age" id="age" autocomplete="given-age" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="price" class="block text-sm/6 font-medium text-gray-900">Price per day</label>
                <div class="mt-2">
                    <input type="number" name="price" id="price" autocomplete="given-price" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                </div>
            </div>

            <div class="sm:col-span-3">
                <label for="image" class="block text-sm/6 font-medium text-gray-900">Cat Image</label>
                <div class="mt-2">
                    <input type="text" name="imageUrl" id="image" autocomplete="given-image" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6">
                </div>
            </div>
        </div>
    </div>
  <div class="mt-6 flex items-center justify-end gap-x-6">
    <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
`;

export default async function(ctx) {
    ctx.render(template(formSubmitHandler));
}

async function formSubmitHandler(e) {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget);
    const catData = Object.fromEntries(formData);

    try {
        await catsApi.create(catData);

        page.redirect('/cats');
    } catch (error) {
        console.log(error.message);
    }
}
 