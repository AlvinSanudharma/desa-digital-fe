<template>
  <aside
    id="Sidebar"
    class="relative flex w-[280px] shrink-0 min-h-screen bg-white border-r border-desa-foreshadow overflow-hidden"
  >
    <div
      class="fixed top-0 h-full w-[280px] flex shrink-0 flex-1 z-20 bg-white"
    >
      <div class="flex flex-col h-full w-full gap-6 pt-[30px] px-6">
        <div class="flex items-center justify-between">
          <img
            src="assets/images/logos/logo-text.svg"
            class="flex h-[30px] shrink-0"
            alt="logo"
          />
          <button
            class="flex size-11 items-center justify-center rounded-2xl border border-desa-background hover:border-desa-secondary transition-setup"
          >
            <img
              src="assets/images/icons/menu-secondary-green.svg"
              class="size-6"
              alt="icon"
            />
          </button>
        </div>
        <div
          class="flex flex-col flex-1 gap-6 overflow-y-scroll hide-scrollbar"
        >
          <nav class="flex flex-col gap-2 pb-12">
            <p class="font-medium text-sm text-desa-secondary">Main Menu</p>
            <ul>
              <li class="group active">
                <a
                  href="kd-dashboard.html"
                  class="flex items-center h-14 gap-2 rounded-2xl p-4 group-hover:bg-desa-foreshadow group-[.active]:bg-desa-foreshadow transition-setup"
                >
                  <div class="relative flex size-6 shrink-0">
                    <img
                      src="assets/images/icons/chart-square-dark-green.svg"
                      class="absolute flex size-6 shrink-0 opacity-0 group-hover:opacity-100 group-[.active]:opacity-100 transition-setup"
                      alt="icon"
                    />
                    <img
                      src="assets/images/icons/chart-square-secondary-green.svg"
                      class="absolute flex size-6 shrink-0 opacity-100 group-hover:opacity-0 group-[.active]:opacity-0 transition-setup"
                      alt="icon"
                    />
                  </div>
                  <span
                    class="text-left leading-5 text-desa-secondary flex flex-1 group-hover:text-desa-dark-green group-[.active]:text-desa-dark-green group-[.active]:font-medium transition-setup"
                  >
                    Dashboard
                  </span>
                </a>
              </li>
            </ul>
            <ul>
              <li class="group">
                <a
                  href="kd-kepala-rumah.html"
                  class="flex items-center h-14 gap-2 rounded-2xl p-4 group-hover:bg-desa-foreshadow group-[.active]:bg-desa-foreshadow transition-setup"
                >
                  <div class="relative flex size-6 shrink-0">
                    <img
                      src="assets/images/icons/crown-dark-green.svg"
                      class="absolute flex size-6 shrink-0 opacity-0 group-hover:opacity-100 group-[.active]:opacity-100 transition-setup"
                      alt="icon"
                    />
                    <img
                      src="assets/images/icons/crown-secondary-green.svg"
                      class="absolute flex size-6 shrink-0 opacity-100 group-hover:opacity-0 group-[.active]:opacity-0 transition-setup"
                      alt="icon"
                    />
                  </div>
                  <span
                    class="text-left leading-5 text-desa-secondary flex flex-1 group-hover:text-desa-dark-green group-[.active]:text-desa-dark-green group-[.active]:font-medium transition-setup"
                  >
                    Kepala Rumah
                  </span>
                </a>
              </li>
            </ul>
            <div class="accordion group/accordion flex flex-col gap-1 w-full">
              <button
                data-expand="Bantuan-Sosial-Content"
                class="group flex w-full shrink-0 items-center h-14 gap-2 rounded-2xl p-4 active"
              >
                <div class="relative flex size-6 shrink-0">
                  <img
                    src="assets/images/icons/bag-2-dark-green.svg"
                    class="absolute flex size-6 shrink-0 opacity-0 group-[.active]:opacity-100 transition-setup"
                    alt="icon"
                  />
                  <img
                    src="assets/images/icons/bag-2-secondary-green.svg"
                    class="absolute flex size-6 shrink-0 opacity-100 group-[.active]:opacity-0 transition-setup"
                    alt="icon"
                  />
                </div>
                <span
                  class="text-left leading-5 text-desa-secondary flex flex-1 group-[.active]:text-desa-dark-green transition-setup"
                >
                  Bantuan Sosial
                </span>
                <div class="relative flex size-6 shrink-0">
                  <img
                    src="assets/images/icons/arrow-circle-dark-green-up.svg"
                    class="absolute flex size-6 shrink-0 opacity-0 group-[.active]:opacity-100 transition-setup"
                    alt="icon"
                  />
                  <img
                    src="assets/images/icons/arrow-circle-secondary-green-down.svg"
                    class="absolute flex size-6 shrink-0 opacity-100 group-[.active]:opacity-0 transition-setup"
                    alt="icon"
                  />
                </div>
              </button>
              <ul
                id="Bantuan-Sosial-Content"
                class="flex flex-col flex-1r pl-[28px]"
              >
                <li
                  class="flex items-center h-[52px] shrink-0 border-l border-desa-background last-of-type:border-0"
                >
                  <div class="flex h-full w-[26px] shrink-0 overflow-hidden">
                    <img
                      src="assets/images/icons/accodion-line.svg"
                      class="h-full object-contain object-left-top"
                      alt="ornament"
                    />
                  </div>
                  <a
                    href="kd-bantuan-sosial.html"
                    class="group flex flex-1 items-center h-[52px] gap-2 rounded-2xl p-4 hover:bg-desa-foreshadow [&.active]:bg-desa-foreshadow transition-setup"
                  >
                    <span
                      class="text-left leading-5 text-desa-secondary group-hover:text-desa-dark-green group-[.active]:text-desa-dark-green group-[.active]:font-medium transition-setup"
                    >
                      List Bansos
                    </span>
                  </a>
                </li>
                <li
                  class="flex items-center h-[52px] shrink-0 border-l border-desa-background last-of-type:border-0"
                >
                  <div class="flex h-full w-[26px] shrink-0 overflow-hidden">
                    <img
                      src="assets/images/icons/accodion-line.svg"
                      class="h-full object-contain object-left-top"
                      alt="ornament"
                    />
                  </div>
                  <a
                    href="kd-pengajuan-bansos.html"
                    class="group flex flex-1 items-center h-[52px] gap-2 rounded-2xl p-4 hover:bg-desa-foreshadow [&.active]:bg-desa-foreshadow transition-setup"
                  >
                    <span
                      class="text-left leading-5 text-desa-secondary group-hover:text-desa-dark-green group-[.active]:text-desa-dark-green group-[.active]:font-medium transition-setup"
                    >
                      Pengajuan Bansos
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="accordion group/accordion flex flex-col gap-1 w-full">
              <button
                data-expand="Jadwal-Desa-Content"
                class="group flex w-full shrink-0 items-center h-14 gap-2 rounded-2xl p-4 active"
              >
                <div class="relative flex size-6 shrink-0">
                  <img
                    src="assets/images/icons/bag-2-dark-green.svg"
                    class="absolute flex size-6 shrink-0 opacity-0 group-[.active]:opacity-100 transition-setup"
                    alt="icon"
                  />
                  <img
                    src="assets/images/icons/bag-2-secondary-green.svg"
                    class="absolute flex size-6 shrink-0 opacity-100 group-[.active]:opacity-0 transition-setup"
                    alt="icon"
                  />
                </div>
                <span
                  class="text-left leading-5 text-desa-secondary flex flex-1 group-[.active]:text-desa-dark-green transition-setup"
                >
                  Jadwal Desa
                </span>
                <div class="relative flex size-6 shrink-0">
                  <img
                    src="assets/images/icons/arrow-circle-dark-green-up.svg"
                    class="absolute flex size-6 shrink-0 opacity-0 group-[.active]:opacity-100 transition-setup"
                    alt="icon"
                  />
                  <img
                    src="assets/images/icons/arrow-circle-secondary-green-down.svg"
                    class="absolute flex size-6 shrink-0 opacity-100 group-[.active]:opacity-0 transition-setup"
                    alt="icon"
                  />
                </div>
              </button>
              <ul
                id="Jadwal-Desa-Content"
                class="flex flex-col flex-1r pl-[28px]"
              >
                <li
                  class="flex items-center h-[52px] shrink-0 border-l border-desa-background last-of-type:border-0"
                >
                  <div class="flex h-full w-[26px] shrink-0 overflow-hidden">
                    <img
                      src="assets/images/icons/accodion-line.svg"
                      class="h-full object-contain object-left-top"
                      alt="ornament"
                    />
                  </div>
                  <a
                    href="kd-pembangunan-desa.html"
                    class="group flex flex-1 items-center h-[52px] gap-2 rounded-2xl p-4 hover:bg-desa-foreshadow [&.active]:bg-desa-foreshadow transition-setup"
                  >
                    <span
                      class="text-left leading-5 text-desa-secondary group-hover:text-desa-dark-green group-[.active]:text-desa-dark-green group-[.active]:font-medium transition-setup"
                    >
                      Pembangunan
                    </span>
                  </a>
                </li>
                <li
                  class="flex items-center h-[52px] shrink-0 border-l border-desa-background last-of-type:border-0"
                >
                  <div class="flex h-full w-[26px] shrink-0 overflow-hidden">
                    <img
                      src="assets/images/icons/accodion-line.svg"
                      class="h-full object-contain object-left-top"
                      alt="ornament"
                    />
                  </div>
                  <a
                    href="kd-event-desa.html"
                    class="group flex flex-1 items-center h-[52px] gap-2 rounded-2xl p-4 hover:bg-desa-foreshadow [&.active]:bg-desa-foreshadow transition-setup"
                  >
                    <span
                      class="text-left leading-5 text-desa-secondary group-hover:text-desa-dark-green group-[.active]:text-desa-dark-green group-[.active]:font-medium transition-setup"
                    >
                      Events Desa
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <ul>
              <li class="group">
                <a
                  href="kd-profile-desa.html"
                  class="flex items-center h-14 gap-2 rounded-2xl p-4 group-hover:bg-desa-foreshadow group-[.active]:bg-desa-foreshadow transition-setup"
                >
                  <div class="relative flex size-6 shrink-0">
                    <img
                      src="assets/images/icons/building-4-dark-green.svg"
                      class="absolute flex size-6 shrink-0 opacity-0 group-hover:opacity-100 group-[.active]:opacity-100 transition-setup"
                      alt="icon"
                    />
                    <img
                      src="assets/images/icons/building-4-secondary-green.svg"
                      class="absolute flex size-6 shrink-0 opacity-100 group-hover:opacity-0 group-[.active]:opacity-0 transition-setup"
                      alt="icon"
                    />
                  </div>
                  <span
                    class="text-left leading-5 text-desa-secondary flex flex-1 group-hover:text-desa-dark-green group-[.active]:text-desa-dark-green group-[.active]:font-medium transition-setup"
                  >
                    Profile Desa
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          <div
            class="flex items-center justify-between h-[84px] rounded-2xl p-5 mb-4 gap-3 bg-desa-black"
          >
            <div class="flex flex-col gap-1">
              <p class="font-semibold leading-5 text-white">Beralih ke Pro</p>
              <a
                href="#"
                class="flex items-center font-medium text-sm hover:underline text-desa-soft-green"
              >
                Upgrade Plan
                <img
                  src="assets/images/icons/arrow-right-soft-green.png"
                  class="flex size-3 shrink-0 ml-0.5"
                  alt="icon"
                />
              </a>
            </div>
            <img
              src="assets/images/icons/crown-soft-green-background.svg"
              class="flex size-11 shrink-0"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
