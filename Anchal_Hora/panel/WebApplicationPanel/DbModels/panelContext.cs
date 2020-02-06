using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApplicationPanel.DbModels
{
    public partial class panelContext : DbContext
    {
        //public panelContext()
        //{
        //}

        public panelContext(DbContextOptions<panelContext> options)
            : base(options)
        {
        }

        public virtual DbSet<EmpInformation> EmpInformation { get; set; }
        public object Panel { get; internal set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EmpInformation>(entity =>
            {
                entity.HasKey(e => e.Sno);

                entity.HasIndex(e => e.Email)
                    .HasName("UQ__EmpInfor__AB6E61641E5DAFB2")
                    .IsUnique();

                entity.Property(e => e.Sno)
                    .HasColumnName("SNo")
                    .ValueGeneratedNever();

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasColumnName("name")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("PASSWORD")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.ProjectName)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Projectid)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .HasColumnName("ROLE")
                    .HasMaxLength(500)
                    .IsUnicode(false);
            });
        }
    }
}
