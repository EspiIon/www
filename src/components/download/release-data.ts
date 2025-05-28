/**
 * Returns the releases object, injecting checksums dynamically.
 * @param checksums Record<string, string> mapping filenames to SHA-256 hashes
 */
export function getReleasesWithChecksums(checksums: Record<string, string>) {
  return {
    macos: {
      universal: {
        link: "https://github.com/zen-browser/desktop/releases/latest/download/zen.macos-universal.dmg",
        label: "Universal",
        checksum: checksums["zen.macos-universal.dmg"],
      },
    },
    windows: {
      x86_64: {
        link: "https://github.com/zen-browser/desktop/releases/latest/download/zen.installer.exe",
        label: "64-bit (Recommended)",
        checksum: checksums["zen.installer.exe"],
      },
      arm64: {
        link: "https://github.com/zen-browser/desktop/releases/latest/download/zen.installer-arm64.exe",
        label: "ARM64",
        checksum: checksums["zen.installer-arm64.exe"],
      },
    },
    linux: {
      x86_64: {
        tarball: {
          link: "https://github.com/zen-browser/desktop/releases/latest/download/zen.linux-x86_64.tar.xz",
          label: "Tarball",
          checksum: checksums["zen.linux-x86_64.tar.xz"],
        },
      },
      aarch64: {
        tarball: {
          link: "https://github.com/zen-browser/desktop/releases/latest/download/zen.linux-aarch64.tar.xz",
          label: "Tarball",
          checksum: checksums["zen.linux-aarch64.tar.xz"],
        },
      },
      flathub: {
        all: {
          link: "https://flathub.org/apps/app.zen_browser.zen",
          label: "Flathub",
        },
      },
    },
  }
}
