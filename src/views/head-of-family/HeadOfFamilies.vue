<template>
  <div id="Header" class="flex items-center justify-between">
    <h1 class="font-semibold text-2xl">Kepala Rumah</h1>
    <a
      href="kd-kepala-rumah-add.html"
      class="flex items-center rounded-2xl py-4 px-6 gap-[10px] bg-desa-dark-green"
    >
      <img
        src="@/assets/images/icons/add-square-white.svg"
        class="flex size-6 shrink-0"
        alt="icon"
      />
      <p class="font-medium text-white">Add New</p>
    </a>
  </div>
  <section id="List-Kepala-Rumah" class="flex flex-col gap-[14px]">
    <form id="Page-Search" class="flex items-center justify-between">
      <div class="flex flex-col gap-3 w-[370px] shrink-0">
        <label class="relative group peer w-full valid">
          <input
            type="text"
            placeholder="Cari nama Kepala Rumah atau NIK"
            class="appearance-none outline-none w-full h-14 rounded-2xl ring-[1.5px] ring-desa-background focus:ring-desa-black py-4 pl-12 pr-6 gap-2 font-medium placeholder:text-desa-secondary transition-all duration-300"
          />
          <div
            class="absolute transform -translate-y-1/2 top-1/2 left-4 flex size-6 shrink-0"
          >
            <img
              src="@/assets/images/icons/user-search-secondary-green.svg"
              class="size-6 hidden group-has-[:placeholder-shown]:flex"
              alt="icon"
            />
            <img
              src="@/assets/images/icons/user-search-black.svg"
              class="size-6 flex group-has-[:placeholder-shown]:hidden"
              alt="icon"
            />
          </div>
        </label>
      </div>
      <div class="options flex items-center gap-4">
        <div class="flex items-center gap-[10px]">
          <span class="font-medium leading-5">Show</span>
          <div class="relative">
            <select
              name=""
              id=""
              class="appearance-none outline-none w-full h-14 rounded-2xl ring-[1.5px] ring-desa-background focus:ring-desa-black py-4 px-6 pr-[52px] gap-2 font-medium placeholder:text-desa-secondary transition-all duration-300"
            >
              <option value="5" selected>5 Entries</option>
              <option value="10">10 Entries</option>
              <option value="20">20 Entries</option>
              <option value="30">30 Entries</option>
              <option value="40">40 Entries</option>
              <option value="50">50 Entries</option>
            </select>
            <img
              src="@/assets/images/icons/arrow-down-black.svg"
              class="flex size-6 shrink-0 absolute transform -translate-y-1/2 top-1/2 right-6"
              alt="icon"
            />
          </div>
        </div>
        <button
          type="button"
          class="flex items-center gap-1 h-14 w-fit rounded-2xl border border-desa-background bg-white py-4 px-6"
        >
          <img
            src="@/assets/images/icons/filter-black.svg"
            class="flex size-6 shrink-0"
            alt="icon"
          />
          <span class="font-medium leading-5">Filter</span>
        </button>
      </div>
    </form>
    <div
      class="card flex items-center justify-between rounded-3xl p-6 bg-white"
    >
      <div class="flex items-center gap-3 w-[260px]">
        <div
          class="flex size-16 shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
        >
          <img
            src="@/assets/images/photos/kk-photo-1.png"
            class="w-full h-full object-cover"
            alt="photo"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-lg leading-[22.5px] w-[184px] truncate">
            Andi Alif Baro
          </p>
          <p class="flex items-center gap-1">
            <img
              src="@/assets/images/icons/briefcase-secondary-green.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <span class="font-medium text-sm text-desa-secondary"
              >Mekanik Kendaraan</span
            >
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-1 w-[180px] shrink-0">
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/keyboard-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">NIK</span>
        </p>
        <p class="font-semibold leading-5">2005100592201005</p>
      </div>
      <p
        class="flex items-center rounded-full w-[224px] shrink-0 py-[14px] px-4 gap-1 bg-desa-blue/10"
      >
        <img
          src="@/assets/images/icons/profile-2user-blue.svg"
          class="flex size-[18px] shrink-0"
          alt="icon"
        />
        <span class="font-medium text-desa-blue">99 Anggota Keluarga</span>
      </p>
      <a
        href="kd-kepala-rumah-manage.html"
        class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
      >
        <span class="font-medium text-white">Manage</span>
      </a>
    </div>
    <div
      class="card flex items-center justify-between rounded-3xl p-6 bg-white"
    >
      <div class="flex items-center gap-3 w-[260px]">
        <div
          class="flex size-16 shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
        >
          <img
            src="@/assets/images/photos/kk-photo-2.png"
            class="w-full h-full object-cover"
            alt="photo"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-lg leading-[22.5px] w-[184px] truncate">
            Nabila Reyna R
          </p>
          <p class="flex items-center gap-1">
            <img
              src="@/assets/images/icons/briefcase-secondary-green.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <span class="font-medium text-sm text-desa-secondary">Perawat</span>
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-1 w-[180px] shrink-0">
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/keyboard-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">NIK</span>
        </p>
        <p class="font-semibold leading-5">80091950281089390</p>
      </div>
      <p
        class="flex items-center rounded-full w-[224px] shrink-0 py-[14px] px-4 gap-1 bg-desa-blue/10"
      >
        <img
          src="@/assets/images/icons/profile-2user-blue.svg"
          class="flex size-[18px] shrink-0"
          alt="icon"
        />
        <span class="font-medium text-desa-blue">4 Anggota Keluarga</span>
      </p>
      <a
        href="kd-kepala-rumah-manage.html"
        class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
      >
        <span class="font-medium text-white">Manage</span>
      </a>
    </div>
    <div
      class="card flex items-center justify-between rounded-3xl p-6 bg-white"
    >
      <div class="flex items-center gap-3 w-[260px]">
        <div
          class="flex size-16 shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
        >
          <img
            src="@/assets/images/photos/kk-photo-3.png"
            class="w-full h-full object-cover"
            alt="photo"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-lg leading-[22.5px] w-[184px] truncate">
            Risky Ichsan
          </p>
          <p class="flex items-center gap-1">
            <img
              src="@/assets/images/icons/briefcase-secondary-green.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <span class="font-medium text-sm text-desa-secondary">Petani</span>
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-1 w-[180px] shrink-0">
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/keyboard-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">NIK</span>
        </p>
        <p class="font-semibold leading-5">41001839101390291</p>
      </div>
      <p
        class="flex items-center rounded-full w-[224px] shrink-0 py-[14px] px-4 gap-1 bg-desa-blue/10"
      >
        <img
          src="@/assets/images/icons/profile-2user-blue.svg"
          class="flex size-[18px] shrink-0"
          alt="icon"
        />
        <span class="font-medium text-desa-blue">6 Anggota Keluarga</span>
      </p>
      <a
        href="kd-kepala-rumah-manage.html"
        class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
      >
        <span class="font-medium text-white">Manage</span>
      </a>
    </div>
    <div
      class="card flex items-center justify-between rounded-3xl p-6 bg-white"
    >
      <div class="flex items-center gap-3 w-[260px]">
        <div
          class="flex size-16 shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
        >
          <img
            src="@/assets/images/photos/photo-1.png"
            class="w-full h-full object-cover"
            alt="photo"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-lg leading-[22.5px] w-[184px] truncate">
            Feri Mahrudin Asep
          </p>
          <p class="flex items-center gap-1">
            <img
              src="@/assets/images/icons/briefcase-secondary-green.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <span class="font-medium text-sm text-desa-secondary"
              >Peternak Ayam</span
            >
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-1 w-[180px] shrink-0">
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/keyboard-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">NIK</span>
        </p>
        <p class="font-semibold leading-5">10029587201940328</p>
      </div>
      <p
        class="flex items-center rounded-full w-[224px] shrink-0 py-[14px] px-4 gap-1 bg-desa-blue/10"
      >
        <img
          src="@/assets/images/icons/profile-2user-blue.svg"
          class="flex size-[18px] shrink-0"
          alt="icon"
        />
        <span class="font-medium text-desa-blue">9 Anggota Keluarga</span>
      </p>
      <a
        href="kd-kepala-rumah-manage.html"
        class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
      >
        <span class="font-medium text-white">Manage</span>
      </a>
    </div>
    <div
      class="card flex items-center justify-between rounded-3xl p-6 bg-white"
    >
      <div class="flex items-center gap-3 w-[260px]">
        <div
          class="flex size-16 shrink-0 rounded-full overflow-hidden bg-desa-foreshadow"
        >
          <img
            src="@/assets/images/photos/photo-2.png"
            class="w-full h-full object-cover"
            alt="photo"
          />
        </div>
        <div class="flex flex-col gap-[6px]">
          <p class="font-semibold text-lg leading-[22.5px] w-[184px] truncate">
            Fiqih Ardiansyah Putra
          </p>
          <p class="flex items-center gap-1">
            <img
              src="@/assets/images/icons/briefcase-secondary-green.svg"
              class="flex size-[18px] shrink-0"
              alt="icon"
            />
            <span class="font-medium text-sm text-desa-secondary"
              >Tukang Bangunan</span
            >
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-1 w-[180px] shrink-0">
        <p class="flex items-center gap-1">
          <img
            src="@/assets/images/icons/keyboard-secondary-green.svg"
            class="flex size-[18px] shrink-0"
            alt="icon"
          />
          <span class="font-medium text-sm text-desa-secondary">NIK</span>
        </p>
        <p class="font-semibold leading-5">30183910948390193</p>
      </div>
      <p
        class="flex items-center rounded-full w-[224px] shrink-0 py-[14px] px-4 gap-1 bg-desa-blue/10"
      >
        <img
          src="@/assets/images/icons/profile-2user-blue.svg"
          class="flex size-[18px] shrink-0"
          alt="icon"
        />
        <span class="font-medium text-desa-blue">3 Anggota Keluarga</span>
      </p>
      <a
        href="kd-kepala-rumah-manage.html"
        class="flex items-center shrink-0 gap-[10px] rounded-2xl py-4 px-6 bg-desa-black"
      >
        <span class="font-medium text-white">Manage</span>
      </a>
    </div>
  </section>
  <nav id="Pagination">
    <ul class="flex items-center gap-3">
      <li class="group">
        <button
          type="button"
          disabled
          class="group/arrow flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow disabled:!bg-desa-foreshadow group-hover:bg-desa-dark-green transition-setup"
        >
          <img
            src="@/assets/images/icons/arrow-left-dark-green.svg"
            class="flex size-6 shrink-0 group-hover:hidden group-disabled/arrow:!hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/arrow-left-foreshadow.svg"
            class="hidden size-6 shrink-0 group-hover:flex group-disabled/arrow:!hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/disabled-arrow-pagination.svg"
            class="hidden size-6 shrink-0 group-disabled/arrow:!flex"
            alt="icon"
          />
        </button>
      </li>
      <li class="group active">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            1
          </span>
        </a>
      </li>
      <li class="group">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            2
          </span>
        </a>
      </li>
      <li class="group">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            3
          </span>
        </a>
      </li>
      <li class="group">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            4
          </span>
        </a>
      </li>
      <li class="group">
        <a
          class="flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow group-hover:bg-desa-dark-green group-[.active]:bg-desa-dark-green transition-setup"
        >
          <span
            class="text-desa-dark-green font-semibold group-[.active]:text-desa-foreshadow group-hover:text-desa-foreshadow transition-setup"
          >
            5
          </span>
        </a>
      </li>
      <li class="group">
        <button
          type="button"
          class="group/arrow flex size-11 shrink-0 items-center justify-center rounded-full bg-desa-foreshadow disabled:!bg-desa-foreshadow group-hover:bg-desa-dark-green transition-setup"
        >
          <img
            src="@/assets/images/icons/arrow-left-dark-green.svg"
            class="flex size-6 shrink-0 rotate-180 group-hover:hidden group-disabled/arrow:!hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/arrow-left-foreshadow.svg"
            class="hidden size-6 shrink-0 rotate-180 group-hover:flex group-disabled/arrow:!hidden"
            alt="icon"
          />
          <img
            src="@/assets/images/icons/disabled-arrow-pagination.svg"
            class="hidden size-6 shrink-0 rotate-180 group-disabled/arrow:!flex"
            alt="icon"
          />
        </button>
      </li>
    </ul>
  </nav>
</template>
