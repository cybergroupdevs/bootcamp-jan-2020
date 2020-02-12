using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace company.DbModels
{
    public partial class webApiContext : DbContext
    {
        public webApiContext()
        {
        }
        public webApiContext(DbContextOptions<webApiContext> options)
            : base(options)
        {
        }
        public virtual DbSet<UsersInfo> UsersInfo { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UsersInfo>(entity =>
            {
                entity.HasKey(e => e.EmpId);

                entity.ToTable("usersInfo");

                entity.Property(e => e.EmpId).HasColumnName("empID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasColumnName("email")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnName("password")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.ProjectId)
                    .HasColumnName("projectID")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Role)
                    .HasColumnName("role")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(200)
                    .IsUnicode(false);
            });
        }
    }
}
